

var params = {
		disX: 0,
		disY: 0,
		flag: false
	}

	//实现拖拽
	var startDrag = function(et, tat, fn) {

		//鼠标按下，激活拖拽
		et.onmousedown = function(event) {
			var e = event || window.event;
			params.flag = true;
			params.disX = e.clientX - tat.offsetLeft;
			params.disY = e.clientY - tat.offsetTop;
			this.setCapture && this.setCapture();
			//拖拽结束
			et.onmouseup = function(event) {
				var e = event || window.event;
				params.flag = false;
				this.releaseCapture && this.releaseCapture();
				//拖拽完成后返回回调函数
				return typeof fn == "function" ? fn() : false;
			}
			return false;

		}

		//拖拽开始
		document.onmousemove = function(event) {
			if (!params.flag) return;

			var e = event || window.event;
			var nL = e.clientX - params.disX;
			var nT = e.clientY - params.disY;
			var maxL = document.documentElement.clientWidth - tat.offsetWidth;
			var maxT = document.documentElement.clientHeight - tat.offsetHeight; 

			nL = nL < 0 ? 0 : nL;
			nL = nL > maxL ? maxL : nL;

			nT = nT < 0 ? 0 : nT;
			nT = nT > maxT ? maxT : nT;

			tat.style.marginTop = tat.style.marginLeft = 0;
			tat.style.left = nL + "px";
			tat.style.top = nT + "px";

			return false;
		}

		
	}