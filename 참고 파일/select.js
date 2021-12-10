
function getRegionNameByCode(code) {
	switch (code) {
		case 1: return "서울";
		case 2: return "인천";
		case 3: return "대전";
		case 4: return "대구";
		case 5: return "광주";
		case 6: return "부산";
		case 7: return "울산";
		case 8: return "세종시";
		case 31: return "경기도";
		case 32: return "강원도";
		case 33: return "충청북도";
		case 34: return "충청남도";
		case 35: return "경상북도";
		case 36: return "경상남도";
		case 37: return "전라북도";
		case 38: return "전라남도";
		case 39: return "제주도";
		default: return "";
	}
}

function getRegionCodeByName(name) {
	switch (name) {
		case "서울": return  1;
		case "인천": return  2;
		case "대전": return  3;
		case "대구": return  4;
		case "광주": return  5;
		case "부산": return  6;
		case "울산": return  7;
		case "세종시": return  8;
		case "경기":
		case "경기도": return 31;
		case "강원":
		case "강원도": return 32;
		case "충북":
		case "충청북도": return 33;
		case "충남":
		case "충청남도": return 34;
		case "경북":
		case "경상북도": return 35;
		case "경남":
		case "경상남도": return 36;
		case "전북":
		case "전라북도": return 37;
		case "전남":
		case "전라남도": return 38;
		case "제주":
		case "제주도": return 39;
		default: return -1;
	}
}
