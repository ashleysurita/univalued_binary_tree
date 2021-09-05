var isUnivalTree = function(root) {
    return helper(root, root.val)
};

function helper(root, value){
    if(!root) return true
    if(root.val !== value) return false
    
    return helper(root.left, value) && helper(root.right, value)
}
