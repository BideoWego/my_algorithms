
class Tag < Struct.new(:attributes)
  def initialize(attributes={})
    @attributes = attributes
  end


  def method_missing(name, *args)
    p([name, args])
    arg = args.first
    if name.to_s.chars.last == '='
      name = name.to_s.gsub('=', '').to_sym
      @attributes[name] = arg
    else
      @attributes[name]
    end
  end
end


tag = Tag.new(id:  'foo', class:  'bar fiz baz', style:  "background: #000;")

tag.style = 'color: red;'
tag.foo = 'bar'
p tag.style
p tag.foo


