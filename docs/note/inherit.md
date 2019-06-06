# JavaScript 实现继承

## 多种实现方式包括ES5、ES6

### 1.原型链

将一个类型的实例赋值给另一个构造函数的原型。

```javascript
function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
};
function SubType(){
    this.subproperty = false;
}
//inherit from SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};
var instance = new SubType();
alert(instance.getSuperValue());   //true
alert(instance instanceof Object);      //true
alert(instance instanceof SuperType);   //true
alert(instance instanceof SubType);     //true

alert(Object.prototype.isPrototypeOf(instance));    //true
alert(SuperType.prototype.isPrototypeOf(instance)); //true
alert(SubType.prototype.isPrototypeOf(instance));   //true
```

### 2.构造函数继承

在子类型构造函数的内部调用超类型构造函数。

```javascript
function SuperType(){
    this.colors = ["red", "blue", "green"];
}
function SubType(){  
    //inherit from SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);    //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);    //"red,blue,green"
```

### 3.组合式继承

使用原型链实现对原型方法的继承，借用构造函数来实现对实例属性的继承。

```javascript
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
};

function SubType(name, age){  
    SuperType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType("hehe");
SubType.prototype.sayAge = function(){
    console.log(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);  //"red,blue,green,black"
instance1.sayName();      //"Nicholas";
instance1.sayAge();       //29
var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);  //"red,blue,green"
instance2.sayName();      //"Greg";
instance2.sayAge();       //27

//delete instance1.name;
console.log(hasPrototypeProperty(instance1, "colors"));
console.log(hasPrototypeProperty(instance1, "name"));
```

### 4.原型式继承

```javascript
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
```

在object()函数内部，先创建了一个临时性构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。

### 5.寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地做了所有工作一样返回对象。

```javascript
function createAnother(original){
  var clone = object(original);
  clone.sayHi = function(){
      alert("hi);
    };
return clone;
}
```

### 6.寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。基本思路：不必为了指定子类型的原型而调用超类型的构造函数。
 本质：使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

```javascript
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);   //create object
    prototype.constructor = subType;               //augment object
    subType.prototype = prototype;                 //assign object
}

function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    alert(this.name);
};

function SubType(name, age){  
    SuperType.call(this, name);

    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);  //"red,blue,green,black"
instance1.sayName();      //"Nicholas";
instance1.sayAge();       //29


var instance2 = new SubType("Greg", 27);
alert(instance2.colors);  //"red,blue,green"
instance2.sayName();      //"Greg";
instance2.sayAge();       //27
```

### 7. ES6 class extends

```javascript
class Parents {}

class child extends Parents {
    constructor() {
        super()
	}
}

```
