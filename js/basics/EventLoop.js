export const EventLoop  = function()
{

  this.stackFrames = function()
  {
    function foo(b) {
      var a = 10;
      return a + b + 11;
    }

    function bar(x) {
      var y = 3;
      return foo(x * y);
    }

    console.log(bar(7));
  }
  this.init = function()
  {
    this.stackFrames();
  }
  this.init();
}

export default EventLoop;