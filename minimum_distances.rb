n = gets.strip.to_i
a = gets.strip
a = a.split(' ').map(&:to_i)
def min_distance(array)
  store = []
  for i in 0...array.length 
    for b in i+1...array.length 
      if array[i].abs == array[b].abs
        store << b - i  
      end 
    end 
  end 
  if store.length == 0
    -1
  else 
    store.min 
  end 
end 
puts min_distance(a)
