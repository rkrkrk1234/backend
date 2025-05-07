function permutation(n,r){
    let fac_n=1;
    let fac_n_r=1;
    for (let i = 2; i <= n; i++) {
        fac_n*=i;
      }
    for (let i = 2; i <= n-r; i++) {
        fac_n_r*=i;
    }
    return fac_n/fac_n_r;
}
function combination(n,r){
    let fac_a=1;
    let fac_r=1;
    let fac_n_r=1;
    for (let i = 2; i <= n; i++) {
        fac_a*=i;
      }
    for (let i = 2; i <= r; i++) {
        fac_r*=i;
    }
    for (let i = 2; i <= n-r; i++) {
        fac_n_r*=i;
    }
    return fac_a/fac_r*fac_n_r;
}
function multiPermutation(n,r){
    let temp=1;
    for (let i = 1; i <= r; i++) {
        temp*=n;
      } 
    return temp;
}
function multiCombination(n,r){
    let fac_n=1;
    let fac_r=1;
    let fac_n_r=1;
    for (let i = 2; i <= n+r-1; i++) {
        fac_n*=i;
      }
    for (let i = 2; i <= r; i++) {
        fac_r*=i;
    }
    for (let i = 2; i <= n-1; i++) {
        fac_n_r*=i;
    }
    return fac_n/fac_r*fac_n_r;
}
module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};