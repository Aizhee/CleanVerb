# CleanVerb

A reverb plugin that combines a traditional reverb effect with a gated ducking system inspired by Fruity Peak Controller. The gate dynamically modulates the wetness of the reverb based on a signal's peak, allowing for a clean and professional sound.

![product image](/GitImages/CleanVerb.png)

Key features include:
- A gate mechanism that ducks the reverb wetness.
- Fully customizable knobs for tailoring the reverb and gate behavior.
- Randomization, bypass, and preset management functionality.
- Real-time display of the gate's peak signal.

## Plugin Features

### **Gate Controls**
1. **Base**:
   - Sets the base signal level for the gate.
   - Controls the peak direction (positive or negative).

2. **Tension**:
   - Adjusts the attack of the gate.
   - Higher values result in a slower response to rising signal peaks.

3. **Decay**:
   - Acts as the release control of the gate.
   - Higher values extend the time for the signal to return to its base level after a peak.

### **Reverb Controls**
4. **Size**:
   - Adjusts the perceived space of the reverb.

5. **Width**:
   - Controls the stereo spread of the reverb effect.

6. **Damp**:
   - Modifies the damping, affecting the high-frequency decay of the reverb.

7. **Highpass/Lowpass Knob**:
   - Combined control for filtering the reverb signal:
     - **Middle**: No filtering.
     - **Left**: Highpass filtering (removes low frequencies).
     - **Right**: Lowpass filtering (removes high frequencies).

### **Mix Controls**
8. **Dry/Wet Slider**:
   - Balances the dry and wet signal of the reverb.

### **Additional Features**
9. **Random Button**:
   - Randomizes all knob values for creative experimentation.

10. **Bypass Button (Power Icon)**:
    - Toggles the plugin on or off.

11. **Preset Manager**:
    - Load, save, and manage presets for quick recall of settings.

### **Visualization**
- **Peak Display**:
   - Real-time visual representation of the gate’s peak signal, helping users fine-tune the reverb and gate interaction.

## Workflow
1. **Set Up the Gate**:
   - Use the **Base** knob to define the initial signal level and peak direction.
   - Adjust the **Tension** and **Decay** knobs to shape the gate's behavior.

2. **Customize the Reverb**:
   - Tailor the reverb space with the **Size**, **Width**, and **Damp** knobs.
   - Use the **Highpass/Lowpass** knob to filter the reverb signal as needed.

3. **Mix the Signal**:
   - Balance the **Dry/Wet Slider** to blend the effect with the original signal.

4. **Experiment and Refine**:
   - Use the **Random Button** for inspiration.
   - Save your favorite settings in the **Preset Manager**.

5. **Visual Feedback**:
   - Use the **Peak Display** to observe the gate’s response and ensure a clean reverb sound.

## Example Use Cases
- **Vocals**: Duck the reverb during loud syllables for clarity.
- **Drums**: Maintain punchy drum hits while adding ambient space.
- **Instruments**: Create dynamic textures without muddying the mix.

## System Requirements
- Compatible with major DAWs supporting VST, or VST3 plugins.
- Minimal CPU usage with optimized algorithms for real-time performance.

## Installation
1. Download the plugin installer from the official website.
2. Run the installer and follow the instructions.
3. Open your DAW and scan for new plugins.

