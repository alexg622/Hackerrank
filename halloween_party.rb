def biggest_odd_slice(slice)
  counter = 1 
  slices_array = []
  for i in 0...slice 
    slices_array << (slice - counter)*counter
    counter += 1 
  end 
  puts slices_array.max
end 
T = gets.strip.to_i 
cuts_array = [] 
T.times do 
    cuts_array << gets.strip.to_i
end 
cuts_array.each do |num| 
    if num.even? 
        puts (num/2)*(num/2)
    else 
        biggest_odd_slice(num)
    end 
end 