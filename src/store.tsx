import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	setColors: (colors: string[]) => void;
	addColor: (color: string) => void;
	deleteColor: () => void;
	deleteVowelsAndColorRed: () => void;
	currentUserStatus: {
		isOnline: boolean;
		emailIsConfirmed: boolean;
	};
	toggleCurrentUserStatusOnline: () => void;
	toggleCurrentUserStatusEmail: () => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		message: 'test',
		setMessage: (message: string) =>
			set((state) => ({ ...state, message })),
		colors: ['blue', 'white', 'red'],
		setColors: (colors: string[]) => set((state) => ({ ...state, colors })),
		addColor: (color: string) =>
			set((state) => ({ ...state, colors: [...state.colors, color] })),
		deleteColor: () =>
			set((state) => ({ ...state, colors: state.colors.slice(0, -1) })),
		deleteVowelsAndColorRed: () =>
			set((state) => {
				const _state = { ...state };
				_state.message = _state.message.replace(/[aeiou]/gi, '');
				_state.colors = _state.colors.filter((m) => m !== 'red');
				return _state;
			}),
		currentUserStatus: {
			isOnline: false,
			emailIsConfirmed: true,
		},
		toggleCurrentUserStatusOnline: () =>
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.isOnline =
					!_state.currentUserStatus.isOnline;
				return _state;
			}),
		toggleCurrentUserStatusEmail: () =>
			set((state) => {
				const _state = { ...state };
				_state.currentUserStatus.emailIsConfirmed =
					!_state.currentUserStatus.emailIsConfirmed;
				return _state;
			}),
	})
);
