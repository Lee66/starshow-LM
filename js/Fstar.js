var AppraiseStar = function(){};
AppraiseStar.prototype = {
	show: function(num,ele) {
		var obj;
		var id = document.getElementById(ele);
		var cl = document.getElementsByClassName(ele)[0]
		if(id!=null){
			obj=id;
		}else if(cl!==null){
			obj=cl;
		}
		console.log(num);
		num == null || num == undefined ? num = 0 : num;
		var defaultStar = '<i class="iconfont">&#xe630;</i>';
		var integerStar = '<i class="iconfont starActive">&#xe630;</i>';
		var halfStarL = '<i class="iconfont icon-pingfenzuo starActive"></i>';
		var halfStarR = '<i class="iconfont icon-pingfenyou" style="margin-left:-8px;"></i>';
		var html = '';
		var len = parseInt(num);
		for(var i = 1; i <= 5; i++) {
			if(i <=num) {
				html += integerStar;
			} else if((i - 1) == parseInt(num) && (i - 1 < num)) {
				html += halfStarL + halfStarR;
			} else if(num + 1 <= i) {
				html += defaultStar;
			}
		}
		obj.innerHTML = html;
	}
};