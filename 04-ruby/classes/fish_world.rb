require 'pry'

fish1 = {
  name: 'fishy fish',
  health: 100,
  speed: 5
}

shark = {
  name: 'sharky shark',
  health: 5000,
  speed: 15
}

ocean_world = []

ocean_world << fish1 << shark

def move_fish(fish)
  # move fish around
end

def move_shark(shark)
  # move shark
end

def move_octopus(octopus)
end


class Fish

  def initialize(name, health, speed)
    @name = name
    @health = health
    @speed = speed
  end

  def sleep
    @health = @health + 10
  end

  # read only
  def health
    @health
  end

  def health=(value)
    @health = value
  end

  # read
  def speed
    @speed
  end

  # write
  def speed=(value)
    @speed = value
  end

  def pretty_output
    "my name is #{@name} i am a pretty fish"
  end

  def to_s
    "my name is #{@name} i am a pretty fish"
  end

end

f1 = Fish.new('fishy fish', 50, 25)
f2 = Fish.new('sharky shark', 10, 5)

class World

  def initialize
    @ocean = []
  end

  def ocean
    @ocean
  end

  def add_fish(fish)
    @ocean << fish
  end

end


binding.pry