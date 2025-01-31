package com.codesquad.issuetracker.label.controller;

import com.codesquad.issuetracker.label.dto.LabelResponse;
import com.codesquad.issuetracker.label.dto.LabelResponses;
import com.codesquad.issuetracker.label.dto.LabelsCountResponse;

import java.util.Arrays;

public class LabelDummyData {
    private LabelDummyData() {
    }

    public static LabelResponses labelResponses() {
        return LabelResponses.from(Arrays.asList(
                labelBe(),
                labelFe()
        ));
    }

    public static LabelResponse labelBe() {
        return LabelResponse.builder()
                       .id(1L)
                       .name("be")
                       .description("label for backend")
                       .color("#1679CF")
                       .build();
    }

    public static LabelResponse labelFe() {
        return LabelResponse.builder()
                       .id(2L)
                       .name("fe")
                       .description("label for frontend")
                       .color("#3EFC68")
                       .build();
    }

    public static LabelsCountResponse labelsCountResponses() {
        return LabelsCountResponse.from(3);
    }
}
