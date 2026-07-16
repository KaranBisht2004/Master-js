const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Descriptor);


Descriptor.writable = true
Descriptor.value = 5.48

console.log(Descriptor);

const coffee  = {
    name : "espersoo",
    price : 920,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

