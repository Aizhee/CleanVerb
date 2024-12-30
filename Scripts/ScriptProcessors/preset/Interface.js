Content.makeFrontInterface(300, 500);

reg currentPreset;
const uph = Engine.createUserPresetHandler();

uph.setPostCallback(function(presetFile)
{
    currentPreset = presetFile;
    dispPresetBrowser.set("text", presetFile.toString(presetFile.NoExtension));
});

//Preset Browser
const clnvrbPresetBrowser = Content.getComponent("PresetBrowserMain");
clnvrbPresetBrowser.showControl(false);

//LeftButton
const movePresetLeft = Content.getComponent("LeftPst");
movePresetLeft.setControlCallback(onmovePresetLeft);
inline function onmovePresetLeft(Component, value)
{
    if (value)
    {
        Engine.loadPreviousUserPreset(1);
    }
}

//Right Button
const movePresetRight = Content.getComponent("RightPst");
movePresetRight.setControlCallback(onmovePresetRight);
inline function onmovePresetRight(Component, value)
{
    if (value)
    {
        Engine.loadNextUserPreset(1);
    }
}

const btnPresetBrowser = Content.getComponent("OpenPreset");

btnPresetBrowser.setValue(false);
btnPresetBrowser.setControlCallback(onbtnPresetBrowse);

const dispPresetBrowser = Content.getComponent("PresetDisp");
dispPresetBrowser.set("text", "-- Select Preset --");

inline function onbtnPresetBrowse(Component, value)
{
    clnvrbPresetBrowser.showControl(value);
}


const randomSize = Content.getComponent("size");
const randomBase = Content.getComponent("base");
const randomTension = Content.getComponent("tension");
const randomDecay = Content.getComponent("decay");
const randomWidth = Content.getComponent("width");
const randomDamp = Content.getComponent("damp");
const randomHPLP = Content.getComponent("hplp");

// Set random
const randomBtn = Content.getComponent("btnRandom"); 
randomBtn.setControlCallback(onRand);
inline function onRand(Component, value)
{
    if (value)
    {
		randomSize.setValue(Math.random());
		randomBase.setValue(Math.random());
		randomTension.setValue(Math.random());
		randomDecay.setValue(Math.random());
		randomWidth.setValue(Math.random());
		randomDamp.setValue(Math.random());
		randomHPLP.setValue(Math.random());
		
		randomSize.changed();
		randomBase.changed();
		randomTension.changed();
		randomDecay.changed();
		randomWidth.changed();
		randomDamp.changed();
		randomHPLP.changed();
		
    }
}

// Get the script FX module as the display buffer source
const var dp = Synth.getDisplayBufferSource("Script FX1");

const var rb = dp.getDisplayBuffer(0);

const var BUFFER_LENGTH = 17384;
const var Panel1 = Content.getComponent("MainPanel");

const var properties = {
  "BufferLength": BUFFER_LENGTH,
  "NumChannels": 1
};

rb.setRingBufferProperties(properties);

const var P1 = Content.addPanel("Display", -2, 75);

P1.setTimerCallback(function()
{

    this.data.buffer = rb.createPath(this.getLocalBounds(0),[0, BUFFER_LENGTH, 0, 1.0],0.0);
    this.repaint();
});

P1.startTimer(30);

P1.setPaintRoutine(function(g)
{
    g.setGradientFill([Colours.withAlpha(Colours.white,0.2)	,0, 0,
                       Colours.withAlpha(Colours.white,0.001), 0, 100]);

    g.fillPath(this.data.buffer, bounds);
    g.setColour(Colours.white);
    g.drawPath(this.data.buffer, bounds, 2.0); 
});
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 