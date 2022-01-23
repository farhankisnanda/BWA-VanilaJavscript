const person = {
    firstname: "M. Farhan",
    lastname: "Kisnanda",
    fullName: function() {
        return  `${this.firstname} ${this.lastname}`;
    },
    weight: 50,
    height: 172,
    weightIdeal: function() {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100 
    },
    needDiet: function() {
        const weightIdeal = this.weightIdeal();
        if (weightIdeal - 5 > this.weight) {
            return 'you need more protein ' + Math.abs(this.weight - weightIdeal);}
        else if(weightIdeal + 5 < this.weight) return "you need more a mayo diet";
        return "you are in a good shape"
    },
};

console.log(person.fullName())
console.log(person.weightIdeal())
console.log(person.needDiet())