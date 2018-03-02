

class BeefyRobotSimulator
  attr_reader :table,
              :robot


  TABLE_SIZE = 5

  COMMANDS = [
    'PLACE',
    'MOVE',
    'LEFT',
    'RIGHT',
    'REPORT'
  ]

  ROTATION = [
    'NORTH',
    'EAST',
    'SOUTH',
    'WEST'
  ]

  DIRECTIONS = {
    'NORTH' => { x: 0, y: 1 },
    'EAST' => { x: 1, y: 0 },
    'SOUTH' => { x: 0, y: -1 },
    'WEST' => { x: -1, y: 0 }
  }


  def initialize
    @table = Array.new(TABLE_SIZE) do
      Array.new(TABLE_SIZE)
    end

    @robot = {}
  end


  def execute(command, *args)
    command = command.upcase
    if COMMANDS.include?(command)
      return if !placed? && command != 'PLACE'
      method = command.downcase.to_sym
      if args.empty?
        send(method)
      else
        send(method, *args)
      end
    else
      raise ArgumentError, "Command not found: #{command}"
    end
  end


  def place(x, y, f)
    x = x.to_i
    y = y.to_i
    if in_bounds?(x, y)
      @robot[:x] = x
      @robot[:y] = y
      @robot[:f] = f
    else
      out_of_bounds(x, y)
    end
    @robot
  end


  def move
    f = @robot[:f]
    movement = DIRECTIONS[f]
    cached = {
      x: @robot[:x],
      y: @robot[:y]
    }
    @robot[:x] += movement[:x]
    @robot[:y] += movement[:y]
    unless in_bounds?(@robot[:x], @robot[:y])
      out_of_bounds(@robot[:x], @robot[:y])
      @robot[:x] = cached[:x]
      @robot[:y] = cached[:y]
    end
    @robot
  end


  def left
    set_rotation(-1, 0, ROTATION.length - 1)
  end


  def right
    set_rotation(-1, ROTATION.length - 1, 0)
  end


  def report
    puts %Q;\rRobot Position:
    \r  x: #{@robot[:x]}
    \r  y: #{@robot[:y]}
    \r  f: #{@robot[:f]}
    ;
  end


  def placed?
    @robot[:x] &&
    @robot[:y] &&
    @robot[:f] &&
    in_bounds?(@robot[:x], @robot[:y])
  end


  private
  def in_bounds?(x, y)
    x >= 0 &&
    y >= 0 &&
    x < TABLE_SIZE &&
    y < TABLE_SIZE
  end


  def out_of_bounds(x, y)
    puts "Out of bounds: #{x}, #{y}"
  end


  def set_rotation(direction, boundary, reset)
    f = @robot[:f]
    rotation_index = ROTATION.index(f)
    if rotation_index == boundary
      rotation_index = reset
    else
      rotation_index += direction
    end
    @robot[:f] = ROTATION[rotation_index]
  end
end






