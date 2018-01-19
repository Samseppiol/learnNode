// Without the semi-colon ending the statement, this code won't run and will error out
const firstname = 'Jane';

(function (lastname) {
    const firstname = 'John'
    console.log(firstname)
    console.log(lastname)
}('Doe'))


console.log(firstname);
