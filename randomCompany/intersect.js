var intersect = function(nums1, nums2) {
  const checkSet = {};
  const result = []
  for(let i = 0; i < nums1.length; i++){
      const key = nums1[i]
      if(checkSet.hasOwnProperty(nums1[i])) {
        checkSet[key] = checkSet[key] + 1
      }else{
        checkSet[key] = 1
      }
  }
  for(let i=0; i < nums2.length ; i++){
      const key = nums2[i]
      if(checkSet.hasOwnProperty(key) && checkSet[key]>0){
          result.push(nums2[i]);
          checkSet[key] = checkSet[key] - 1
      }
  }

  return result
};

nums1 = [4,9,5], nums2 = [9,4,9,8,4]


console.log(intersect(nums1,nums2))