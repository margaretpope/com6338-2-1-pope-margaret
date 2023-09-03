function greet () {
    var name = prompt('What is your name?')
    if (!name) return
    var hello = alert('Hello, ' + name)
    var ageStr = prompt('How old are you?')
    if (!ageStr) return
    var age = parseInt(ageStr)
    var birthday = confirm('Have you had a birthday yet this year?')
    if (birthday) {
        year = new Date().getFullYear() - age
    } else {
        year = new Date().getFullYear() - (age + 1)
    } 
    var answer = alert('You were born in ' + year)
}