// TODO: remove it when https://github.com/DefinitelyTyped/DefinitelyTyped/pull/62225 merged
export interface JWPlayer extends jwplayer.JWPlayer {
  addCues: (cues: { begin: number; cueType: string; text: string }[]) => void;
}
