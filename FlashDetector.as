package {
  import flash.display.Sprite;
  import flash.external.ExternalInterface;
  
  [SWF(backgroundColor="0x000000")]
  public class FlashDetector extends Sprite {

    function FlashDetector() {
      ExternalInterface.call("__flash_detector_call");
    }

  }

}
