
#include "JuceHeader.h"
#include "PresetData.h"

BEGIN_EMBEDDED_DATA()
DEFINE_EXTERNAL_DATA(hise::FileHandlerBase::AudioFiles)
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::Images, PresetData::images, PresetData::imagesSize);
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::MidiFiles, PresetData::midiFiles, PresetData::midiFilesSize);
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::SampleMaps, PresetData::samplemaps, PresetData::samplemapsSize);
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::Scripts, PresetData::externalFiles, PresetData::externalFilesSize);
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::Presets, PresetData::preset, PresetData::presetSize);
DEFINE_EMBEDDED_DATA(hise::FileHandlerBase::UserPresets, PresetData::userPresets, PresetData::userPresetsSize);
END_EMBEDDED_DATA()

REGISTER_STATIC_DSP_LIBRARIES()
{
	REGISTER_STATIC_DSP_FACTORY(hise::HiseCoreDspFactory);
}
scriptnode::dll::FactoryBase* scriptnode::DspNetwork::createStaticFactory() { return nullptr; }
#if USE_COPY_PROTECTION
RSAKey hise::Unlocker::getPublicKey() { return RSAKey(""); };
#endif
AudioProcessor* JUCE_CALLTYPE createPluginFilter() { CREATE_PLUGIN(nullptr, nullptr); }

AudioProcessor* hise::StandaloneProcessor::createProcessor() { return nullptr; }
String hise::FrontendHandler::getProjectName() { return "CleanVerb"; };
String hise::FrontendHandler::getCompanyName() { return "Aizhe"; };
String hise::FrontendHandler::getCompanyWebsiteName() { return ""; };
String hise::FrontendHandler::getCompanyCopyright() { return "(c)2024, Aizhe"; };
String hise::FrontendHandler::getVersionString() { return "1.0.0"; };
String hise::FrontendHandler::getAppGroupId() { return ""; };
String hise::FrontendHandler::getExpansionKey() { return ""; };
String hise::FrontendHandler::getExpansionType() { return "Disabled"; };
String hise::FrontendHandler::getHiseVersion() { return "4.1.0"; };
String hise::FrontendHandler::getDefaultUserPreset() const { return ""; };