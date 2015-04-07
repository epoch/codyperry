
class Math

  def self.sqrt
  end

end


Math.sqrt


class Monster

  @@count = 0

  def initialize(name)
    @name = name
    @@count+=1
  end

  def sleep
  end

  def to_s
    ""
  end

  def self.count
  end

end



Monster.count
monster_counter = 0
# an instance of monster
m1 = Monster.new('bob')
monster_counter++
m2 = Monster.new('bebob')
monster_counter++
m2.sleep