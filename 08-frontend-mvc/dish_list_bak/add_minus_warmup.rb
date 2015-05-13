arr = [5,4,3,2,1]
odd = true
arr.reduce do |memo, elem|
  if odd
    memo = memo - elem
  else
    memo = memo + elem
  end
  odd = !odd
  memo
end

arr = [5,4,3,2,1]
arr.reduce(function(prev, curr, index, arr) {
  if (index % 2 === 0) {
    return prev + curr
  } else {
    return prev - curr
  }
})