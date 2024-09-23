<template>
	<section class="CoreSection">
		<h3 v-if="fields.title.value">{{ fields.title.value }}</h3>
		<BaseContainer
			:content-h-align="fields.contentHAlign.value"
			:content-padding="fields.contentPadding.value"
			@click.capture="captureClick"
			@input.capture="captureInput"
			@change.capture="captureChange"
		>
			<slot></slot>
		</BaseContainer>
	</section>
</template>

<script lang="ts">
import { FieldType } from "../writerTypes";
import {
	accentColor,
	primaryTextColor,
	secondaryTextColor,
	containerBackgroundColor,
	containerShadow,
	separatorColor,
	buttonColor,
	buttonTextColor,
	buttonShadow,
	cssClasses,
	contentHAlign,
	contentPadding,
} from "../renderer/sharedStyleFields";

const description =
	"A container component that divides the layout into sections, with an optional title.";

export default {
	writer: {
		name: "Section",
		description,
		category: "Layout",
		allowedChildrenTypes: ["*"],
		fields: {
			title: {
				name: "Title",
				init: "Custom Section Title",
				desc: "Leave blank to hide.",
				type: FieldType.Text,
			},
			accentColor,
			primaryTextColor,
			secondaryTextColor,
			containerBackgroundColor,
			containerShadow,
			separatorColor,
			buttonColor,
			buttonTextColor,
			buttonShadow,
			contentPadding: {
				...contentPadding,
				default: "16px",
			},
			contentHAlign,
			cssClasses,
		},
		previewField: "title",
	},
};
</script>

<script setup lang="ts">
import { inject } from "vue";
import injectionKeys from "../injectionKeys";
import BaseContainer from "../core_components/base/BaseContainer.vue";

const fields = inject(injectionKeys.evaluatedFields);
const wf = inject(injectionKeys.core);
const instancePath = inject(injectionKeys.instancePath);

function getParentTabId(target: HTMLElement): string {
	const parentTabElement: HTMLElement = (target as HTMLElement).closest(
		".CoreTab",
	);
	if (parentTabElement == null) return null;

	var parentTabComponent = wf.getComponentById(
		parentTabElement.dataset.writerId,
	);
	var parentTabCustomId = parentTabComponent.content["customId"];
	return parentTabCustomId;
}

function getComponentCustomId(targetElement: HTMLElement): string {
	var component = wf.getComponentById(targetElement.dataset.writerId);
	var customId = component.content["customId"];
	var defaultId = targetElement.dataset.writerId;

	return customId != "" ? customId : defaultId;
}

function getCustomIdentifiers(targetElement: HTMLElement): {
  computedId: string;
  targetComponentId: string;
  parentTabId: string | null;
} {
	var targetComponentId = getComponentCustomId(targetElement);
	var parentTabId = getParentTabId(targetElement);

	if (parentTabId != null) {
		var computedId = parentTabId + "_" + targetComponentId;
	} else {
		var computedId = targetComponentId;
	}

	return {computedId, targetComponentId, parentTabId}
}

function isDisabled(event) {
	const target: HTMLElement = event.target as HTMLElement;
	const isDisabled = target.attributes["aria-disabled"].value;
	return isDisabled == "true";
}



function clickIsOnATab(event: Event): boolean {
	const targetElement: HTMLElement = event.target as HTMLElement;
	const closesetWriterElement: HTMLElement =
		targetElement.closest("[data-writer-id]");

	let component = wf.getComponentById(closesetWriterElement.dataset.writerId);

	const writerComponentIsATab = component["type"].includes("tab");
	const targetElementIsAButton = targetElement.nodeName == "BUTTON";

	//user clicked the button part of a tab
	return writerComponentIsATab && targetElementIsAButton;
}

function clickIsNotOnAButton(targetElement: HTMLElement): boolean {
	let res = "BUTTON" != targetElement.nodeName;
	return res;
}

function elementIsNotThisType(
	event: Event,
	expectedTypes: Array<string>,
): boolean {
	const thisElementType = (<HTMLInputElement>event.target).nodeName;
	return !expectedTypes.includes(thisElementType);
}

function captureClick(event: Event) {
	const targetElement: HTMLElement = (event.target as HTMLElement).closest(
		"[data-writer-id]",
	);

	// fail early and permit normal behavior for tabs
	if (clickIsOnATab(event)) return;
	event.stopPropagation();

	if (clickIsNotOnAButton(targetElement)) {
		return;
	}
	if (isDisabled(event)) {
		return;
	}

	const {computedId, targetComponentId, parentTabId} = getCustomIdentifiers(targetElement);
	const customEvent = new CustomEvent("click", {
		detail: {
			payload: {
				id: computedId,
				tab: parentTabId,
				control: targetComponentId,
			},
		},
	});
	wf.forwardEvent(customEvent, instancePath, true);
}

function captureInput(event: Event) {
	const targetElement: HTMLElement = (event.target as HTMLElement).closest(
		"[data-writer-id]",
	);

	event.stopPropagation();
	if (elementIsNotThisType(event, ["INPUT"])) {
		return;
	}

	const {computedId, targetComponentId, parentTabId} = getCustomIdentifiers(targetElement);
	const inputValue = (<HTMLInputElement>event.target).value;

		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
		console.log("computedId: " + computedId)
		console.log("targetComponentId: " + targetComponentId)

	const customEvent = new CustomEvent("input", {
		detail: {
			payload: {
				id: computedId,
				tab: parentTabId,
				control: targetComponentId,
				value: inputValue,
			},
		},
	});

	wf.forwardEvent(customEvent, instancePath, true);
}

function captureChange(event: Event) {
	const targetElement: HTMLElement = (event.target as HTMLElement).closest(
		"[data-writer-id]",
	);

	event.stopPropagation();
	if (elementIsNotThisType(event, ["SELECT", "INPUT"])) {
		return;
	}

	const {computedId, targetComponentId, parentTabId} = getCustomIdentifiers(targetElement);
	const inputValue = (<HTMLInputElement>event.target).value;
	const customEvent = new CustomEvent("change", {
		detail: {
			payload: {
				id: computedId,
				tab: parentTabId,
				control: targetComponentId,
				value: inputValue,
			},
		},
	});

	// toggleDisableInputs(componentId, inputValue)
	wf.forwardEvent(customEvent, instancePath, true);
}
</script>

<style scoped>
@import "../renderer/sharedStyles.css";
.CoreSection {
	overflow: hidden;
	border: 1px solid var(--separatorColor);
	border-radius: 8px;
	box-shadow: var(--containerShadow);
	background-color: var(--containerBackgroundColor);
}

h3 {
	margin: 16px 16px 0 16px;
}
</style>
