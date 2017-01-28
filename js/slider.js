( function(){
	var getSliderContainer = document.getElementsByClassName('slider-container');
	var getImageSliderwrapper = getSliderContainer[0].getElementsByClassName('image-slider-wrapper');
	var getImagesDiv =getImageSliderwrapper[0].getElementsByClassName('images-div');
	var left= getSliderContainer[0].getElementsByClassName('nav-left');
	var right= getSliderContainer[0].getElementsByClassName('nav-right');
	var rightButton = right[0].getElementsByTagName("img");
	var leftButton = left[0].getElementsByTagName("img");
	var imageWidth = getImagesDiv[0].offsetWidth;
	var maxWidth = getImageSliderwrapper[0].offsetWidth;
	var rightMargin;
	var leftMargin;
	var direction = -1;
	var currentMargin;
	var newMargin;
	var myInterval;
	var count=0;
	var delay=0;
	var that = this;
	getImageSliderwrapper[0].style.marginLeft =0;
	
	function main() {

		this.init = function(){

			count++;
			if(count % 30==0 && count>1.1*delay) {
				autoRun();
			}

		}

		myInterval = setInterval(this.init,100);

		rightButton[0].onclick = function() {
	 		delay=count;
	 		goRightNav();
	 			
	 	}
	 		
	 	leftButton[0].onclick = function(){
	 		delay=count;
	 			
	 		goLeftNav();
	 	}
	  
	  	var goLeftNav=function(){
							
		//clearInterval(myInterval);
			direction=-1;
			
			leftMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);
			rightMargin =getImageSliderwrapper[0].offsetWidth+parseInt(getImageSliderwrapper[0].style.marginLeft);
			 
			if(rightMargin>(imageWidth)) {
				
				currentMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);

				newMargin = direction*imageWidth +currentMargin;
				getImageSliderwrapper[0].style.marginLeft = newMargin + "px";
				
			}
		
			direction*=-1;
		
		}
		
		var goRightNav=function(){
			
			//clearInterval(myInterval);
			direction=1;
			leftMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);

			rightMargin =getImageSliderwrapper[0].offsetWidth+parseInt(getImageSliderwrapper[0].style.marginLeft);
			
			if(leftMargin !==0) {
				currentMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);	
				newMargin = direction*imageWidth +currentMargin;
				getImageSliderwrapper[0].style.marginLeft = newMargin + "px";
				
			}
			
			direction*=-1;
		}

	 	var autoRun = function () {

			leftMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);
			rightMargin =getImageSliderwrapper[0].offsetWidth+parseInt(getImageSliderwrapper[0].style.marginLeft);
			
			if(rightMargin==(imageWidth)) {
				direction=1;	
			}

			if(leftMargin==0) {
				direction=-1;
				
			}		
			
			currentMargin = parseInt(getImageSliderwrapper[0].style.marginLeft);
			newMargin = direction*imageWidth + currentMargin;
			
			getImageSliderwrapper[0].style.marginLeft = newMargin + "px";
			



		}
			
	}

new main().init();

})();


