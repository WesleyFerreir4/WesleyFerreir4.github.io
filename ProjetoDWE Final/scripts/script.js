var win = null;
function NovaJanela(pagina,nome,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
win = window.open(pagina,nome,settings);
};

function confirmBox() {
if (confirm("Voce deseja mesmo ir para o portal do IFSP?")) {
location.href="http://portal.ifspguarulhos.edu.br";}
}