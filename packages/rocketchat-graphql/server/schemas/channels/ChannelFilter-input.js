export const schema = `
	input ChannelFilter {
		nameFilter: String
		privacy: Privacy
		joinedChannels: Boolean
		sortBy: ChannelSort
	}
`;
