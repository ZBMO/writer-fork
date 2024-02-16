<template>
	<div class="CoreMetric" :style="rootStyle">
		<div class="name">{{ fields.name.value }}</div>
		<div class="icon">
				<i class="ColorIcon"
						v-if="sentiment != 'neutral'"
						:class="displayIcon"
						:style="{fontSize: `${fields.size.value}px`, color: fields.color.value}"
					></i>
			</div>
			<div class="note">{{ noteWithoutPrefix }}</div>
	</div>
</template>

<script lang="ts">
import { FieldCategory, FieldType } from "../streamsyncTypes";
import {
cssClasses,
	primaryTextColor,
	secondaryTextColor
} from "../renderer/sharedStyleFields";

const description =
	"A component that prominently displays a metric value and associated information.";

export default {
	streamsync: {
		name: "Metric",
		description,
		category: "Content",
		fields: {
			name: {
				name: "Name",
				default: "Metric",
				type: FieldType.Text,
			},
			metricvalue: {
				name: "Value",
				init: "+Pass",
				type: FieldType.Text,
				desc: "Prefix with '+' for a positive message, with '-' for a negative message.",
			},
			size: {
				name: "Icon size",
				type: FieldType.Number,
				desc: `Icon size in px`,
				category: FieldCategory.Style,
				default: 20
			},
			color: {
				name: "Icon color",
				type: FieldType.Color,
				category: FieldCategory.Style,
			},
			primaryTextColor,
			secondaryTextColor,
			positiveColor: {
				name: "Positive",
				default: "#00B800",
				type: FieldType.Color,
				category: FieldCategory.Style,
			},
			neutralColor: {
				name: "Neutral",
				default: "var(--secondaryTextColor)",
				type: FieldType.Color,
				category: FieldCategory.Style,
			},
			negativeColor: {
				name: "Negative",
				default: "#FB0000",
				type: FieldType.Color,
				category: FieldCategory.Style,
			},
			positiveIcon: {
				name: "Positive Icon",
				default: "check",
				type: FieldType.Text,
				category: FieldCategory.Style,
			},
			negativeIcon: {
				name: "Negative Icon",
				default: "close",
				type: FieldType.Text,
				category: FieldCategory.Style,
			},
			cssClasses,
		},
		previewField: "name",
	},
};
</script>
<script setup lang="ts">
import { computed, inject } from "vue";
import injectionKeys from "../injectionKeys";
const fields = inject(injectionKeys.evaluatedFields);

const sentiment = computed(() => {
	const note: string = fields.metricvalue.value;
	if (!note) return "neutral";
	const firstChar = note.charAt(0);
	if (firstChar == "+") {
		return "positive";
	} else if (firstChar == "-") {
		return "negative";
	}
	return "neutral";
});

const displayIcon = computed(() => {
	const sent = sentiment.value
	if (sent == "positive") {
		return ["ri-" + fields.positiveIcon.value + "-line"]
	} else {
		return ["ri-" + fields.negativeIcon.value + "-line"]
	}
});

const noteWithoutPrefix = computed(() => {
	const note: string = fields.metricvalue.value;
	if (!note) return;
	const firstChar = note.charAt(0);
	if (firstChar == "+" || firstChar == "-") {
		return note.substring(1);
	}
	return note;
});

const rootStyle = computed(() => {
	const sentimentColors = {
		positive: fields.positiveColor.value,
		neutral: fields.neutralColor.value,
		negative: fields.negativeColor.value,
	};
	return {
		"--messageActiveSentimentColor": sentimentColors[sentiment.value],
	};
});
</script>
<style scoped>
@import "../renderer/sharedStyles.css";

.CoreMetric {
	padding-left: 16px;
	display: grid;
	grid-template-columns: [first] 16fr [second] 1fr [third] 5fr [end];
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	gap: 8px;
	border-color: var(--messageActiveSentimentColor);
	min-height: 1.4rem;
}

.ColorIcon {
	color: var(--messageActiveSentimentColor);
}
.name {
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.9rem;
	color: black;
	grid-column-start: first;
  	grid-column-end: second;
}

.icon {
	grid-column-start: second;
  	grid-column-end: third;
}

.note {
	font-size: 0.9rem;
	color: black;
	filter: brightness(0.9);
	grid-column-start: third;
  	grid-column-end: end;
}
</style>
