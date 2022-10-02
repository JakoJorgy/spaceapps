gdjs.solarAutoCode = {};
gdjs.solarAutoCode.GDfundoObjects1= [];
gdjs.solarAutoCode.GDfundoObjects2= [];
gdjs.solarAutoCode.GDsistemaSObjects1= [];
gdjs.solarAutoCode.GDsistemaSObjects2= [];
gdjs.solarAutoCode.GDobFundoObjects1= [];
gdjs.solarAutoCode.GDobFundoObjects2= [];
gdjs.solarAutoCode.GDventoSolarObjects1= [];
gdjs.solarAutoCode.GDventoSolarObjects2= [];
gdjs.solarAutoCode.GDNewObjectObjects1= [];
gdjs.solarAutoCode.GDNewObjectObjects2= [];
gdjs.solarAutoCode.GDNewObject2Objects1= [];
gdjs.solarAutoCode.GDNewObject2Objects2= [];
gdjs.solarAutoCode.GDvoltarMenuObjects1= [];
gdjs.solarAutoCode.GDvoltarMenuObjects2= [];

gdjs.solarAutoCode.conditionTrue_0 = {val:false};
gdjs.solarAutoCode.condition0IsTrue_0 = {val:false};
gdjs.solarAutoCode.condition1IsTrue_0 = {val:false};


gdjs.solarAutoCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("sistemaS"), gdjs.solarAutoCode.GDsistemaSObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.solarAutoCode.GDsistemaSObjects1.length === 0 ) ? 0 :gdjs.solarAutoCode.GDsistemaSObjects1[0].getPointY("")), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.solarAutoCode.GDfundoObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.solarAutoCode.GDfundoObjects1.length === 0 ) ? 0 :gdjs.solarAutoCode.GDfundoObjects1[0].getY()), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("voltarMenu"), gdjs.solarAutoCode.GDvoltarMenuObjects1);

gdjs.solarAutoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.solarAutoCode.GDvoltarMenuObjects1.length;i<l;++i) {
    if ( gdjs.solarAutoCode.GDvoltarMenuObjects1[i].getBehavior("Arrastável").isDragged() ) {
        gdjs.solarAutoCode.condition0IsTrue_0.val = true;
        gdjs.solarAutoCode.GDvoltarMenuObjects1[k] = gdjs.solarAutoCode.GDvoltarMenuObjects1[i];
        ++k;
    }
}
gdjs.solarAutoCode.GDvoltarMenuObjects1.length = k;}if (gdjs.solarAutoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "solarManu", false);
}}

}


};

gdjs.solarAutoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.solarAutoCode.GDfundoObjects1.length = 0;
gdjs.solarAutoCode.GDfundoObjects2.length = 0;
gdjs.solarAutoCode.GDsistemaSObjects1.length = 0;
gdjs.solarAutoCode.GDsistemaSObjects2.length = 0;
gdjs.solarAutoCode.GDobFundoObjects1.length = 0;
gdjs.solarAutoCode.GDobFundoObjects2.length = 0;
gdjs.solarAutoCode.GDventoSolarObjects1.length = 0;
gdjs.solarAutoCode.GDventoSolarObjects2.length = 0;
gdjs.solarAutoCode.GDNewObjectObjects1.length = 0;
gdjs.solarAutoCode.GDNewObjectObjects2.length = 0;
gdjs.solarAutoCode.GDNewObject2Objects1.length = 0;
gdjs.solarAutoCode.GDNewObject2Objects2.length = 0;
gdjs.solarAutoCode.GDvoltarMenuObjects1.length = 0;
gdjs.solarAutoCode.GDvoltarMenuObjects2.length = 0;

gdjs.solarAutoCode.eventsList0(runtimeScene);
return;

}

gdjs['solarAutoCode'] = gdjs.solarAutoCode;
