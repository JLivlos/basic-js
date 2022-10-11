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
function createDreamTeam() {
    if ((!Array.isArray(arguments[0]) || arguments[0].length === 0)) {
        return false;
    } else {
        let names = [];
        for (let i = 0; i < arguments[0].length; i++) {
            if (typeof arguments[0][i] === 'string') names.push(arguments[0][i])
        }
        let result = [];
        names.sort().forEach(item => {
            let name = item.trim();
            result.push(name[0].toUpperCase());
        });
        return result.sort().join('');
    }
}

module.exports = {
    createDreamTeam
};