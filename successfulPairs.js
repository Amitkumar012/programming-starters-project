/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    
    // Sort potions for binary search
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const result = [];

    for (let spell of spells) {
        // Minimum potion strength needed
        const minPotion = Math.ceil(success / spell);
        
        // Binary search for the first potion >= minPotion
        let left = 0, right = m - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (potions[mid] < minPotion) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // Count of potions that form successful pairs
        result.push(m - left);
    }

    return result;
};
