puts "this is bottle number 1"
puts "this is bottle number 2"
puts "this is bottle number 3"

# tedious

=begin
  this is a
  multiline
  comment
=end

# number = 0

# while number < 10
#   puts "this is bottle #{number}"
#   number = number + 1
# end

# while true
#   puts "eat dumpling"
#   exit(0)
# end

number = 0

until number > 10
  puts "this is bottle #{number}"
  number += 1
end

# while !bank_account.empty?
#   puts 'party on'
# end

# until bank_account.empty?
#   puts 'party on'
# end

dumplings_devoured = 0

begin
  puts "eat dumpling"
  dumplings_devoured = dumplings_devoured + 1
end while dumplings_devoured < 50


3.times do
  puts "beetlejuice"
end

1.upto(3) do
  puts "beetlejuice"
end

3.downto(0) do
  puts "beetlejuice"
end