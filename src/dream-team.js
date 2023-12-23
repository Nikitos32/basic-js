const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = '';
  if (members === null || members === undefined) return false;
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === 'string'){
      str += members[i].trim()[0].toUpperCase();
      console.log(str)
    }
  }
  str = str.split('');
  str.sort();
  str = str.join('');
  if (str === '') return false;
  return str;
}

createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
])

module.exports = {
  createDreamTeam
};
