var name= new Array();
name[0]="aa";
name[1]="ja";
name[2]="jb";
name[3]="jc";
name[4]="ba";
name[5]="ca";
name[6]="da";
name[7]="ea";
name[8]="fa";
name[9]="jd";
for (var i = 0; i < name.length; i++) {
	if(name[i].charAt(0)==='J'|| name[i].charAt(0)==='j'){
        console.log("Goodbye "+ name[i])
	}
	else{
		console.log("Hello "+ name[i])
	}
}