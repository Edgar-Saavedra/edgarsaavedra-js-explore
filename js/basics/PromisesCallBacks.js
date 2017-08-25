export const PromisesCallBacks = function()
{
  this.count = 0;
  this.talk = function(add){
    this.count =+ add;
    return this.count;
  }
  this.log = function(msg)
  {
    console.log('PromisesCallBacks : ',msg);
  }
  this.init = function()
  {
  }
  this.init();
}