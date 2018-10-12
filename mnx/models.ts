// https://en.wikipedia.org/wiki/Scientific_pitch_notation note frequencies

// xmlns="http://www.w3.org/mnx"

//<"mnx">
class MNX {
    //el
    head: MNXHead;
    //content
    content: (Collection | Score);
}

class MetadataElement {
    //el
    title: string;
    //el
    subtitle: string;
    //els
    creators: Creator[];
    //el
    rights: string;
    //el
    style_selector: StyleSelector;
    //el
    style_class: StyleClass;

}

class Stylesheet {

}

class MNXHead extends MetadataElement {
    //el
    stylesheet: Stylesheet;
}

class Creator {
    type: string;
    name: string;
}

class StyleSelector {
    rule: string;
    style: StyleProperties;
}

class StyleClass {
    name: string;
    style: StyleProperties;
}

class StyleProperties {
    properties: StyleProperty[];
}

class StyleProperty {
    name: string;
    value: string;
}

enum CollectionType {
    movements,
    sections,
    parts
}

class Collection extends MetadataElement {
    type: CollectionType;
    //content
    children: (Collection | Score)[];
}

class Score extends MetadataElement {
    src: string;
    //musical body
}

class Direction {
    location: string; // measure location
    staff: number; // staff index
    orient: Orientation;
}

class Directions {

}

//<measure>
class UnsequencedMeasure extends MetadataElement {
    index: number; // 1-based
    number: string; // > 0 /visual
    barline: BarLine;
}

enum Orientation {
    Up,
    Down
}

class Dicrections {

}

class SequenceContentElement {
    style: StyleProperties;
}

//<beamed>
class Beamed extends SequenceContentElement {
    value: NoteValue;
    continue: ElementLocation;
    //MetadataElement TODO
    
    //els
    content: SequenceContentElement[];

    //Interpretation
}

class ElementLocation {
    // XML id, i.e., #something
}

// class MetricalDuration { }
class NoteValue { }
class NoteValueQuantity { }

class EventContent extends MetadataElement{
}

class Rest extends EventContent {
    pitch: Pitch; // ignored accidental
}

class Tied {

}

enum NoteName {
    A, B, C, D, E, F, G
}

class NoteAlteration {
    // sharps, flats and fractionals
}

class Pitch {
    //C4, A3, G5, F1, etc....
    note: NoteName;
    octave: number;
    accidental: number;
}

class Note extends EventContent {
    //Metadata TODO
    pitch: Pitch;
    staff: number | null;
    accidental: NoteAlteration | null;
    value: NoteValueQuantity | null;
}

//<event>
class SequenceEvent extends SequenceContentElement {
    measure: boolean | null; //yes
    value: NoteValue; //not required in measure=yes
    orient: Orientation | null;
    staff: number | null; //staff index
    duration: NoteValueQuantity;

    // event content
}

//<forward>
class Forward extends SequenceContentElement {
    duration: NoteValueQuantity;
}

enum TupletShow {
    none,
    inner,
    both
}

enum TupletBracket {
    auto,
    no,
    yes
}

class Tuplet extends SequenceContentElement {
    outer: NoteValueQuantity;
    inner: NoteValueQuantity;
    orient: Orientation;
    staff: number;
    showNumber: TupletShow; //default inner
    showValue: TupletShow; //default none
    bracket: TupletBracket; //default auto
    //els
    content: SequenceContentElement[];
}

enum GraceType {
    StealPrevious,
    StealFollowing,
    MakeTime
}

class Grace extends SequenceContentElement {
    //Metadata TODO
    type: GraceType; // default StealPrevious
    slash: boolean; //yes (default) slahs the note
    //els
    content: SequenceContentElement[];
}

//<sequence>
class Sequence extends MetadataElement {
    orient: Orientation | null;
    staff: number; // staff index
    voice: string // cross measure identifier
    // Sequence Content
    //els
    content: SequenceContentElement[];
    // Iterpretation Content
}

enum BarLine {
    regular,
    dotted,
    dashed,
    heavy,
    lightLight,
    lightHeavy,
    heavyLight,
    heavyHeavy,
    tick,
    short,
    none
}

//<measure>
class Measure extends UnsequencedMeasure {
    //els >= 1
    sequences: Sequence[];
    //el
    directions: Directions | null;
}

class UnsequencedMeasureContent {
    //els
    measures: UnsequencedMeasure;
}

class MeasureContent {
    //els
    measures: Measure;
}

//<global>
class Global extends UnsequencedMeasureContent {
    parts: string[];
}

//<instrument-sound>
class InstrumentSound {

}

//<part>
class Part extends MeasureContent {
    //el
    partName: string;
    //el
    partAbbreviation: string;
    instrumentSound: InstrumentSound;
}

enum Profile {
    standard //single global element
}

//<score-audio>
class ScoreAudio {

}

//<mnx-common>
class MusicalBody extends MetadataElement {
    profile: Profile;
    //el
    stylesheet: Stylesheet;
    //el
    global: Global[];
    //els > 0
    parts: Part[];
    //els
    audios: ScoreAudio[];
}

// const regExs = {
//     digits: /^\d+/,
//     noteValuePrefix: /^(\/|\*)/
// }

// function retrieveAndStrip(input: string, regex: RegExp): [string, string] {
//     let stripped = input.replace(regex, "");
//     return [stripped, "$&"];
// }

// class NoteValue {
//     fractional: boolean;
// }

// class NoteValueQuantity {
//     baseValue: number;
//     multiplier: number;
// }

// const dot = "d";
// class DottedNoteValueQuantity extends NoteValueQuantity {
//     dots: number;

// }

// class TimeSignature {
// }