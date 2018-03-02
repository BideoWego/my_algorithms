require 'beefy_robot_simulator'


describe BeefyRobotSimulator do
  let(:simulator) { BeefyRobotSimulator.new }


  before do
    allow($stdout).to receive(:puts)
  end


  describe '#execute' do
    it 'executes the command when valid' do
      expect { simulator.execute('PLACE', 0, 0, 'NORTH') }.to_not raise_error
      expect(simulator.robot).to eq({
        x: 0,
        y: 0,
        f: 'NORTH'
      })
    end
  end


  describe 'PLACE command' do
    it 'calls #out_of_bounds when coords are out of bounds' do
      expect(simulator).to receive(:out_of_bounds).exactly(4).times
      simulator.execute('PLACE', -1, 0, 'NORTH')
      simulator.execute('PLACE', 0, -1, 'NORTH')
      simulator.execute('PLACE', 5, 0, 'NORTH')
      simulator.execute('PLACE', 0, 5, 'NORTH')
    end
  end


  describe 'unplaced robot' do
    it 'ignores commands until placed' do
      expect(simulator).to_not receive(:move)
      expect(simulator).to_not receive(:left)
      expect(simulator).to_not receive(:right)
      expect(simulator).to_not receive(:report)
      simulator.execute('MOVE')
      simulator.execute('LEFT')
      simulator.execute('RIGHT')
      simulator.execute('REPORT')
    end
  end
end





