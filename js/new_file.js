var array=departmentList;
function showChild(data){
	var trlist=$('#departmentTable').find('tr');
	var line=0;
	$.each(trlist,function(){
		if($(this).find('td:eq(0)').text()==data){
			line=$(this).prevAll().length
		}
	})
	$.each(array,function(){
		if(this.departmentId==data){
			$.each(this.childDepartment,function(){
				var leaderName='';
				var isvisible=0;
				if(this.leaderEmployee==null){
					leaderName='暂无，请到更改设置';
				}else{
					leaderName=this.leaderEmployee.employeeName
				}
				if(this.departmentIsvisible==1){
					isvisible='禁用';
				}else{
					isvisible='可用';
				}
				var x='<tr><td>'+this.departmentId+'</td><td>'+this.departmentName+'</td><td>'
					+this.departmentDescription+'</td><td><a href="javascript:;" onclick="showChild('
					+this.departmentId+')">查看下级部门</a></td><td>'+leaderName+
					'</td><td>'+isvisible+'</td><td><a href="showUpdateDepartment?departmentId='+this.departmentId+'">'+
					'<button class="btn btn-info" onclick="return confirmUpdate()">'+
					'<span class="glyphicon glyphicon-pencil" aria-hidden="true">'+
					'</span> 编辑</button></a></td>'+
					'<td><a href="deleteDepartment?departmentId='+this.departmentId+'&boolean=false">'+
					'<button class="btn btn-danger" onclick="return confirmDelete()" >'+
					'<span class="glyphicon glyphicon-trash" aria-hidden="true">'+
					'</span> 禁用</button></a></td>'+
					'<td><a href="deleteDepartment?departmentId='+this.departmentId+'&boolean=true">'+
					'<button class="btn btn-danger" onclick="return confirmDelete()" >'+
					'<span class="glyphicon glyphicon-trash" aria-hidden="true">'+
					'</span> 级联禁用</button></a></td></tr>';
				$('#departmentTable tbody tr:eq('+line+')').after(x)
            	$('#departmentTable tbody tr:eq('+line+') td:eq(3) a').text("收起下级部门")
            	$('#departmentTable tbody tr:eq('+line+') td:eq(3) a').attr('onclick',deleteChile())
            	$.each(this.childDepartment, function() {
            		array.push(this);
            	});
        	})
		}
	})
}
function deleteChild(data){
	var trlist=$('#departmentTable').find('tr');
	var department=findDepartment(data);
	$.each(department.childDepartment, function() {
		var id=this.departmentId
		$.each(trlist, function() {
			if(id==$(this).find('td:eq(0)').text()){
				array.splice($.inArray(department,array),1);
				$(this).remove();
			}
		});
	});
}
function findDepartment(data){
	$.each(array, function() {
		if(this.departmentId==data){
			return this;
		}
	});
}
