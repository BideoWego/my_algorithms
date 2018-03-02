require './lib/beefy_robot_simulator'


begin
  simulator = BeefyRobotSimulator.new
  EXIT_COMMANDS = ['exit', 'q', 'quit']

  puts "Welcome to the Beefy Robot Simulator"
  puts "Valid commands are:"
  puts "  PLACE x, y, f"
  puts "  MOVE"
  puts "  LEFT"
  puts "  RIGHT"
  puts "  REPORT"
  puts

  loop do
    input = gets.strip
    break if EXIT_COMMANDS.include?(input)
    tokens = input.split(' ')
    command = tokens.first
    args = tokens[1..-1].join
    args = args.split(',').map(&:strip)
    simulator.execute(command, *args)
    puts
  end
rescue SystemExit, Interrupt
ensure
  puts "\n"
  puts 'Goodbye'
end








