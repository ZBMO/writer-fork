
// Import the templates

import BubbleMessage from './BubbleMessage.vue';
import BubbleMessageAdvanced from './BubbleMessageAdvanced.vue';
import CustomSection from './CustomCoreSection.vue';
import CustomButton from './CustomCoreButton.vue';    
import CustomDropDown from './input/CoreDropdownInput.vue';
import CustomTextInput from './input/CoreTextInput.vue';
import CustomNumberInput from './input/CustomNumberInput.vue';
import CustomTabs from './CustomTabs.vue';
import CustomTab from './CustomTab.vue';


// Export an object with the ids and the templates as default

export default {
    "bubblemessage": BubbleMessage,
    "bubblemessageadvanced": BubbleMessageAdvanced,
    "customsection": CustomSection,
    "custombutton": CustomButton,
    "customdropdown": CustomDropDown,
    "customtextinput": CustomTextInput,
    "customnumberinput": CustomNumberInput,
    "customtabs": CustomTabs,
    "customtab": CustomTab,
}