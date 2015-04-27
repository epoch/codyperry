// this keyword


function person() {
  console.log(this.fullname);
}

var cody = {
  fullname: 'cody',
  person: person,
  foo: function() {
    console.log('my fullname is ' + this.fullname);
  }
}

var perry = {
  fullname: 'perry'
}

var app = {

  name: 'dt',
  sayHi: function() {

    var self = this; // someObject

    var doSomething = function() {
      console.log('hi ' + this.name);
    }

    $('.title').on('click', doSomething);
    $('#title').parent()
  }


}
