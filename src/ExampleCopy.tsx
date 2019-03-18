import { createUuid } from '../utils/helpers';

const ExampleCopy = [
  {
    id: createUuid(),
    type: 'text',
    name: '',
    isVisible: true,
    isLocked: false,
    pivot: { x: 0.5, y: 0.5 },
    booleanOperation: 'union',
    width: { unit: 'auto', value: 212 },
    height: { unit: 'auto', value: 29 },
    y: { unit: 'pixel', value: 175 },
    x: { value: 75, unit: 'pixel' },
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scale: 1,
    aspectRatio: 0,
    isFixedAspectRatio: false,
    isFixedPosition: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    opacity: 1,
    isPinned: false,
    isMask: false,
    ignoreMask: false,
    content: 'Regular SF body copy',
    textAttributes: [
      {
        id: createUuid(),
        attributes: {
          color: { r: 0, g: 0, b: 0, a: 1 },
          font: {
            defaultLineHeight: 29,
            family: 'SF Pro Display',
            fileName: 'Arial.ttf', // Not sure if this is the issue. Have tried various font options.
            postScriptName: 'SFProDisplay-Regular',
            size: 24,
            weight: 'Regular',
            weightNum: 400,
            italic: false,
            isDisabled: false,
          },
          paragraphSpacing: 0,
          characterSpacing: -0.36,
          textAlign: 'left',
        },
        range: [0, 19],
      },
    ],
  },
  {
    id: createUuid(),
    type: 'text',
    name: '',
    isVisible: true,
    isLocked: false,
    pivot: { x: 0.5, y: 0.5 },
    booleanOperation: 'union',
    width: { unit: 'auto', value: 399 },
    height: { unit: 'auto', value: 66 },
    y: { unit: 'pixel', value: 109 },
    x: { unit: 'pixel', value: 75 },
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scale: 1,
    aspectRatio: 0,
    isFixedAspectRatio: false,
    isFixedPosition: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    opacity: 1,
    isPinned: false,
    isMask: false,
    ignoreMask: false,
    content: 'SF Bold Heading',
    textAttributes: [
      {
        id: createUuid(),
        attributes: {
          color: { r: 0, g: 0, b: 0, a: 1 },
          font: {
            defaultLineHeight: 66,
            family: 'SF Pro Display',
            fileName: 'Arial.ttf', // Not sure if this is the issue. Have tried various font options.
            postScriptName: 'SFProDisplay-Bold',
            size: 55,
            weight: 'Bold',
            weightNum: 700,
            italic: false,
            isDisabled: false,
          },
          paragraphSpacing: 0,
          characterSpacing: -0.825,
          textAlign: 'left',
        },
        range: [0, 14],
      },
    ],
  },
];

export default ExampleCopy;
