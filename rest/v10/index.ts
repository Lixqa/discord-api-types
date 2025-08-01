import type { Snowflake } from '../../globals';
import { urlSafeCharacters } from '../../utils/internals';

export * from '../common';
export type * from './application';
export type * from './auditLog';
export type * from './autoModeration';
export * from './channel';
export type * from './emoji';
export type * from './gateway';
export type * from './guild';
export type * from './guildScheduledEvent';
export type * from './interactions';
export type * from './invite';
export * from './monetization';
export type * from './oauth2';
export type * from './poll';
export type * from './soundboard';
export type * from './stageInstance';
export type * from './sticker';
export type * from './template';
export type * from './user';
export type * from './voice';
export type * from './webhook';

export const APIVersion = '10';

export const Routes = {
	/**
	 * Route for:
	 * - GET `/applications/{application.id}/role-connections/metadata`
	 * - PUT `/applications/{application.id}/role-connections/metadata`
	 */
	applicationRoleConnectionMetadata(applicationId: Snowflake) {
		return `/applications/${applicationId}/role-connections/metadata` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/auto-moderation/rules`
	 * - POST `/guilds/{guild.id}/auto-moderation/rules`
	 */
	guildAutoModerationRules(guildId: Snowflake) {
		return `/guilds/${guildId}/auto-moderation/rules` as const;
	},

	/**
	 * Routes for:
	 * - GET    `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
	 * - PATCH  `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
	 * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
	 */
	guildAutoModerationRule(guildId: Snowflake, ruleId: Snowflake) {
		return `/guilds/${guildId}/auto-moderation/rules/${ruleId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/audit-logs`
	 */
	guildAuditLog(guildId: Snowflake) {
		return `/guilds/${guildId}/audit-logs` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}`
	 * - PATCH  `/channels/{channel.id}`
	 * - DELETE `/channels/{channel.id}`
	 */
	channel(channelId: Snowflake) {
		return `/channels/${channelId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/messages`
	 * - POST `/channels/{channel.id}/messages`
	 */
	channelMessages(channelId: Snowflake) {
		return `/channels/${channelId}/messages` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}`
	 * - PATCH  `/channels/{channel.id}/messages/{message.id}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}`
	 */
	channelMessage(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/messages/${messageId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
	 */
	channelMessageCrosspost(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/messages/${messageId}/crosspost` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageOwnReaction(channelId: Snowflake, messageId: Snowflake, emoji: string) {
		return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageUserReaction(channelId: Snowflake, messageId: Snowflake, emoji: string, userId: Snowflake) {
		return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
	 *
	 * **Note**: You need to URL encode the emoji yourself
	 */
	channelMessageReaction(channelId: Snowflake, messageId: Snowflake, emoji: string) {
		return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
	 */
	channelMessageAllReactions(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/messages/${messageId}/reactions` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/messages/bulk-delete`
	 */
	channelBulkDelete(channelId: Snowflake) {
		return `/channels/${channelId}/messages/bulk-delete` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
	 * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
	 */
	channelPermission(channelId: Snowflake, overwriteId: Snowflake) {
		return `/channels/${channelId}/permissions/${overwriteId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/invites`
	 * - POST `/channels/{channel.id}/invites`
	 */
	channelInvites(channelId: Snowflake) {
		return `/channels/${channelId}/invites` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/followers`
	 */
	channelFollowers(channelId: Snowflake) {
		return `/channels/${channelId}/followers` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/typing`
	 */
	channelTyping(channelId: Snowflake) {
		return `/channels/${channelId}/typing` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/messages/pins`
	 */
	channelMessagesPins(channelId: Snowflake) {
		return `/channels/${channelId}/messages/pins` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/messages/pins/{message.id}`
	 * - DELETE `/channels/{channel.id}/messages/pins/{message.id}`
	 */
	channelMessagesPin(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/messages/pins/${messageId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/pins`
	 *
	 * @deprecated Use {@link Routes.channelMessagesPins} instead.
	 */
	channelPins(channelId: Snowflake) {
		return `/channels/${channelId}/pins` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/pins/{message.id}`
	 * - DELETE `/channels/{channel.id}/pins/{message.id}`
	 *
	 * @deprecated Use {@link Routes.channelMessagesPin} instead.
	 */
	channelPin(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/pins/${messageId}` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/channels/{channel.id}/recipients/{user.id}`
	 * - DELETE `/channels/{channel.id}/recipients/{user.id}`
	 */
	channelRecipient(channelId: Snowflake, userId: Snowflake) {
		return `/channels/${channelId}/recipients/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/emojis`
	 * - POST `/guilds/{guild.id}/emojis`
	 */
	guildEmojis(guildId: Snowflake) {
		return `/guilds/${guildId}/emojis` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
	 * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
	 */
	guildEmoji(guildId: Snowflake, emojiId: Snowflake) {
		return `/guilds/${guildId}/emojis/${emojiId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/guilds`
	 */
	guilds() {
		return '/guilds' as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}`
	 * - PATCH  `/guilds/{guild.id}`
	 * - DELETE `/guilds/{guild.id}`
	 */
	guild(guildId: Snowflake) {
		return `/guilds/${guildId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/preview`
	 */
	guildPreview(guildId: Snowflake) {
		return `/guilds/${guildId}/preview` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/channels`
	 * - POST  `/guilds/{guild.id}/channels`
	 * - PATCH `/guilds/{guild.id}/channels`
	 */
	guildChannels(guildId: Snowflake) {
		return `/guilds/${guildId}/channels` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/members/{user.id}`
	 * - PUT    `/guilds/{guild.id}/members/{user.id}`
	 * - PATCH  `/guilds/{guild.id}/members/@me`
	 * - PATCH  `/guilds/{guild.id}/members/{user.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}`
	 */
	guildMember(guildId: Snowflake, userId: Snowflake | '@me' = '@me') {
		return `/guilds/${guildId}/members/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members`
	 */
	guildMembers(guildId: Snowflake) {
		return `/guilds/${guildId}/members` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/members/search`
	 */
	guildMembersSearch(guildId: Snowflake) {
		return `/guilds/${guildId}/members/search` as const;
	},

	/**
	 * Route for:
	 * - POST `/guilds/{guild.id}/members-search`
	 */
	guildMembersSearchV2(guildId: Snowflake) {
		return `/guilds/${guildId}/members-search` as const;
	},

	/**
	 * Route for:
	 * - PATCH `/guilds/{guild.id}/members/@me/nick`
	 *
	 * @deprecated Use {@link Routes.guildMember} instead.
	 */
	guildCurrentMemberNickname(guildId: Snowflake) {
		return `/guilds/${guildId}/members/@me/nick` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
	 */
	guildMemberRole(guildId: Snowflake, memberId: Snowflake, roleId: Snowflake) {
		return `/guilds/${guildId}/members/${memberId}/roles/${roleId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/guilds/{guild.id}/mfa`
	 */
	guildMFA(guildId: Snowflake) {
		return `/guilds/${guildId}/mfa` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/bans`
	 */
	guildBans(guildId: Snowflake) {
		return `/guilds/${guildId}/bans` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/bans/{user.id}`
	 * - PUT    `/guilds/{guild.id}/bans/{user.id}`
	 * - DELETE `/guilds/{guild.id}/bans/{user.id}`
	 */
	guildBan(guildId: Snowflake, userId: Snowflake) {
		return `/guilds/${guildId}/bans/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/roles`
	 * - POST  `/guilds/{guild.id}/roles`
	 * - PATCH `/guilds/{guild.id}/roles`
	 */
	guildRoles(guildId: Snowflake) {
		return `/guilds/${guildId}/roles` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/roles/{role.id}`
	 * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
	 * - DELETE `/guilds/{guild.id}/roles/{role.id}`
	 */
	guildRole(guildId: Snowflake, roleId: Snowflake) {
		return `/guilds/${guildId}/roles/${roleId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/prune`
	 * - POST `/guilds/{guild.id}/prune`
	 */
	guildPrune(guildId: Snowflake) {
		return `/guilds/${guildId}/prune` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/regions`
	 */
	guildVoiceRegions(guildId: Snowflake) {
		return `/guilds/${guildId}/regions` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/invites`
	 */
	guildInvites(guildId: Snowflake) {
		return `/guilds/${guildId}/invites` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/integrations`
	 */
	guildIntegrations(guildId: Snowflake) {
		return `/guilds/${guildId}/integrations` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
	 */
	guildIntegration(guildId: Snowflake, integrationId: Snowflake) {
		return `/guilds/${guildId}/integrations/${integrationId}` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/widget`
	 * - PATCH `/guilds/{guild.id}/widget`
	 */
	guildWidgetSettings(guildId: Snowflake) {
		return `/guilds/${guildId}/widget` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.json`
	 */
	guildWidgetJSON(guildId: Snowflake) {
		return `/guilds/${guildId}/widget.json` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/vanity-url`
	 */
	guildVanityUrl(guildId: Snowflake) {
		return `/guilds/${guildId}/vanity-url` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/widget.png`
	 */
	guildWidgetImage(guildId: Snowflake) {
		return `/guilds/${guildId}/widget.png` as const;
	},

	/**
	 * Route for:
	 * - GET    `/invites/{invite.code}`
	 * - DELETE `/invites/{invite.code}`
	 */
	invite(code: string) {
		return `/invites/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/templates/{template.code}`
	 * - POST `/guilds/templates/{template.code}`
	 */
	template(code: string) {
		return `/guilds/templates/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/templates`
	 * - POST `/guilds/{guild.id}/templates`
	 */
	guildTemplates(guildId: Snowflake) {
		return `/guilds/${guildId}/templates` as const;
	},

	/**
	 * Route for:
	 * - PUT    `/guilds/{guild.id}/templates/{template.code}`
	 * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
	 * - DELETE `/guilds/{guild.id}/templates/{template.code}`
	 */
	guildTemplate(guildId: Snowflake, code: string) {
		return `/guilds/${guildId}/templates/${code}` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/polls/{message.id}/answers/{answer_id}`
	 */
	pollAnswerVoters(channelId: Snowflake, messageId: Snowflake, answerId: number) {
		return `/channels/${channelId}/polls/${messageId}/answers/${answerId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/polls/{message.id}/expire`
	 */
	expirePoll(channelId: Snowflake, messageId: Snowflake) {
		return `/channels/${channelId}/polls/${messageId}/expire` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/threads`
	 * - POST `/channels/{channel.id}/messages/{message.id}/threads`
	 */
	threads(parentId: Snowflake, messageId?: Snowflake) {
		const parts = ['', 'channels', parentId];

		if (messageId) parts.push('messages', messageId);

		parts.push('threads');

		return parts.join('/') as
			| `/channels/${Snowflake}/messages/${Snowflake}/threads`
			| `/channels/${Snowflake}/threads`;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/threads/active`
	 */
	guildActiveThreads(guildId: Snowflake) {
		return `/guilds/${guildId}/threads/active` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/threads/archived/public`
	 * - GET `/channels/{channel.id}/threads/archived/private`
	 */
	channelThreads(channelId: Snowflake, archivedStatus: 'private' | 'public') {
		return `/channels/${channelId}/threads/archived/${archivedStatus}` as const;
	},

	/**
	 * Route for:
	 * - GET `/channels/{channel.id}/users/@me/threads/archived/private`
	 */
	channelJoinedArchivedThreads(channelId: Snowflake) {
		return `/channels/${channelId}/users/@me/threads/archived/private` as const;
	},

	/**
	 * Route for:
	 * - GET    `/channels/{thread.id}/thread-members`
	 * - GET    `/channels/{thread.id}/thread-members/{user.id}`
	 * - PUT    `/channels/{thread.id}/thread-members/@me`
	 * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
	 * - DELETE `/channels/{thread.id}/thread-members/@me`
	 * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
	 */
	threadMembers(threadId: Snowflake, userId?: Snowflake | '@me') {
		const parts = ['', 'channels', threadId, 'thread-members'];

		if (userId) parts.push(userId);

		return parts.join('/') as
			| `/channels/${Snowflake}/thread-members/${Snowflake | '@me'}`
			| `/channels/${Snowflake}/thread-members`;
	},

	/**
	 * Route for:
	 * - GET   `/users/@me`
	 * - GET   `/users/{user.id}`
	 * - PATCH `/users/@me`
	 *
	 * @param userId - The user ID, defaulted to `@me`
	 */
	user(userId: Snowflake | '@me' = '@me') {
		return `/users/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/applications/{application.id}/role-connection`
	 * - PUT `/users/@me/applications/{application.id}/role-connection`
	 */
	userApplicationRoleConnection(applicationId: Snowflake) {
		return `/users/@me/applications/${applicationId}/role-connection` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/guilds`
	 */
	userGuilds() {
		return `/users/@me/guilds` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/guilds/{guild.id}/member`
	 */
	userGuildMember(guildId: Snowflake) {
		return `/users/@me/guilds/${guildId}/member` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/users/@me/guilds/{guild.id}`
	 */
	userGuild(guildId: Snowflake) {
		return `/users/@me/guilds/${guildId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/users/@me/channels`
	 */
	userChannels() {
		return `/users/@me/channels` as const;
	},

	/**
	 * Route for:
	 * - GET `/users/@me/connections`
	 */
	userConnections() {
		return `/users/@me/connections` as const;
	},

	/**
	 * Route for:
	 * - GET `/voice/regions`
	 */
	voiceRegions() {
		return `/voice/regions` as const;
	},

	/**
	 * Route for:
	 * - GET  `/channels/{channel.id}/webhooks`
	 * - POST `/channels/{channel.id}/webhooks`
	 */
	channelWebhooks(channelId: Snowflake) {
		return `/channels/${channelId}/webhooks` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/webhooks`
	 */
	guildWebhooks(guildId: Snowflake) {
		return `/guilds/${guildId}/webhooks` as const;
	},

	/**
	 * Route for:
	 * - GET    `/webhooks/{webhook.id}`
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}`
	 * - PATCH  `/webhooks/{webhook.id}`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
	 * - DELETE `/webhooks/{webhook.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
	 * - POST   `/webhooks/{webhook.id}/{webhook.token}`
	 *
	 * - POST   `/webhooks/{application.id}/{interaction.token}`
	 */
	webhook(webhookId: Snowflake, webhookToken?: string) {
		const parts = ['', 'webhooks', webhookId];

		if (webhookToken) parts.push(webhookToken);

		return parts.join('/') as `/webhooks/${Snowflake}/${string}` | `/webhooks/${Snowflake}`;
	},

	/**
	 * Route for:
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
	 * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
	 *
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
	 * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
	 */
	webhookMessage(webhookId: Snowflake, webhookToken: string, messageId: Snowflake | '@original' = '@original') {
		return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
	 * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
	 */
	webhookPlatform(webhookId: Snowflake, webhookToken: string, platform: 'github' | 'slack') {
		return `/webhooks/${webhookId}/${webhookToken}/${platform}` as const;
	},

	/**
	 * Route for:
	 * - GET `/gateway`
	 */
	gateway() {
		return `/gateway` as const;
	},

	/**
	 * Route for:
	 * - GET `/gateway/bot`
	 */
	gatewayBot() {
		return `/gateway/bot` as const;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/applications/@me`
	 */
	oauth2CurrentApplication() {
		return `/oauth2/applications/@me` as const;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/@me`
	 */
	oauth2CurrentAuthorization() {
		return `/oauth2/@me` as const;
	},

	/**
	 * Route for:
	 * - GET `/oauth2/authorize`
	 */
	oauth2Authorization() {
		return `/oauth2/authorize` as const;
	},

	/**
	 * Route for:
	 * - POST `/oauth2/token`
	 */
	oauth2TokenExchange() {
		return `/oauth2/token` as const;
	},

	/**
	 * Route for:
	 * - POST `/oauth2/token/revoke`
	 */
	oauth2TokenRevocation() {
		return `/oauth2/token/revoke` as const;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/commands`
	 * - PUT  `/applications/{application.id}/commands`
	 * - POST `/applications/{application.id}/commands`
	 */
	applicationCommands(applicationId: Snowflake) {
		return `/applications/${applicationId}/commands` as const;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/commands/{command.id}`
	 */
	applicationCommand(applicationId: Snowflake, commandId: Snowflake) {
		return `/applications/${applicationId}/commands/${commandId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
	 * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
	 * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
	 */
	applicationGuildCommands(applicationId: Snowflake, guildId: Snowflake) {
		return `/applications/${applicationId}/guilds/${guildId}/commands` as const;
	},

	/**
	 * Route for:
	 * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
	 */
	applicationGuildCommand(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake) {
		return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
	 */
	interactionCallback(interactionId: Snowflake, interactionToken: string) {
		return `/interactions/${interactionId}/${interactionToken}/callback` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/member-verification`
	 * - PATCH `/guilds/{guild.id}/member-verification`
	 */
	guildMemberVerification(guildId: Snowflake) {
		return `/guilds/${guildId}/member-verification` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/voice-states/@me`
	 * - GET `/guilds/{guild.id}/voice-states/{user.id}`
	 * - PATCH `/guilds/{guild.id}/voice-states/@me`
	 * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
	 */
	guildVoiceState(guildId: Snowflake, userId: Snowflake | '@me' = '@me') {
		return `/guilds/${guildId}/voice-states/${userId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
	 * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
	 */
	guildApplicationCommandsPermissions(applicationId: Snowflake, guildId: Snowflake) {
		return `/applications/${applicationId}/guilds/${guildId}/commands/permissions` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
	 * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
	 */
	applicationCommandPermissions(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake) {
		return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions` as const;
	},

	/**
	 * Route for:
	 * - GET   `/guilds/{guild.id}/welcome-screen`
	 * - PATCH `/guilds/{guild.id}/welcome-screen`
	 */
	guildWelcomeScreen(guildId: Snowflake) {
		return `/guilds/${guildId}/welcome-screen` as const;
	},

	/**
	 * Route for:
	 * - POST `/stage-instances`
	 */
	stageInstances() {
		return `/stage-instances` as const;
	},

	/**
	 * Route for:
	 * - GET `/stage-instances/{channel.id}`
	 * - PATCH `/stage-instances/{channel.id}`
	 * - DELETE `/stage-instances/{channel.id}`
	 */
	stageInstance(channelId: Snowflake) {
		return `/stage-instances/${channelId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/stickers/{sticker.id}`
	 */
	sticker(stickerId: Snowflake) {
		return `/stickers/${stickerId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/sticker-packs`
	 */
	stickerPacks() {
		return '/sticker-packs' as const;
	},

	/**
	 * Route for:
	 * - GET `/sticker-packs/{pack.id}`
	 */
	stickerPack(packId: Snowflake) {
		return `/sticker-packs/${packId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/sticker-packs`
	 *
	 * @deprecated Use {@link Routes.stickerPacks} instead.
	 */
	nitroStickerPacks() {
		return '/sticker-packs' as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/stickers`
	 * - POST `/guilds/{guild.id}/stickers`
	 */
	guildStickers(guildId: Snowflake) {
		return `/guilds/${guildId}/stickers` as const;
	},

	/**
	 * Route for:
	 * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
	 * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
	 * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
	 */
	guildSticker(guildId: Snowflake, stickerId: Snowflake) {
		return `/guilds/${guildId}/stickers/${stickerId}` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/scheduled-events`
	 * - POST `/guilds/{guild.id}/scheduled-events`
	 */
	guildScheduledEvents(guildId: Snowflake) {
		return `/guilds/${guildId}/scheduled-events` as const;
	},

	/**
	 * Route for:
	 * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
	 * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
	 * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
	 */
	guildScheduledEvent(guildId: Snowflake, guildScheduledEventId: Snowflake) {
		return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
	 */
	guildScheduledEventUsers(guildId: Snowflake, guildScheduledEventId: Snowflake) {
		return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/onboarding`
	 * - PUT `/guilds/{guild.id}/onboarding`
	 */
	guildOnboarding(guildId: Snowflake) {
		return `/guilds/${guildId}/onboarding` as const;
	},

	/**
	 * Route for:
	 * - PUT `/guilds/${guild.id}/incident-actions`
	 */
	guildIncidentActions(guildId: Snowflake) {
		return `/guilds/${guildId}/incident-actions` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/@me`
	 * - PATCH `/applications/@me`
	 */
	currentApplication() {
		return '/applications/@me' as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/entitlements`
	 * - POST `/applications/{application.id}/entitlements`
	 */
	entitlements(applicationId: Snowflake) {
		return `/applications/${applicationId}/entitlements` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/entitlements/{entitlement.id}`
	 * - DELETE `/applications/{application.id}/entitlements/{entitlement.id}`
	 */
	entitlement(applicationId: Snowflake, entitlementId: Snowflake) {
		return `/applications/${applicationId}/entitlements/${entitlementId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/skus`
	 */
	skus(applicationId: Snowflake) {
		return `/applications/${applicationId}/skus` as const;
	},

	/**
	 * Route for:
	 * - POST `/guilds/{guild.id}/bulk-ban`
	 */
	guildBulkBan(guildId: Snowflake) {
		return `/guilds/${guildId}/bulk-ban` as const;
	},

	/**
	 * Route for:
	 * - POST `/applications/{application.id}/entitlements/{entitlement.id}/consume`
	 */
	consumeEntitlement(applicationId: Snowflake, entitlementId: Snowflake) {
		return `/applications/${applicationId}/entitlements/${entitlementId}/consume` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/emojis`
	 * - POST `/applications/{application.id}/emojis`
	 */
	applicationEmojis(applicationId: Snowflake) {
		return `/applications/${applicationId}/emojis` as const;
	},

	/**
	 * Route for:
	 * - GET `/applications/{application.id}/emojis/{emoji.id}`
	 * - PATCH `/applications/{application.id}/emojis/{emoji.id}`
	 * - DELETE `/applications/{application.id}/emojis/{emoji.id}`
	 */
	applicationEmoji(applicationId: Snowflake, emojiId: Snowflake) {
		return `/applications/${applicationId}/emojis/${emojiId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/skus/{sku.id}/subscriptions`
	 */
	skuSubscriptions(skuId: Snowflake) {
		return `/skus/${skuId}/subscriptions` as const;
	},

	/**
	 * Route for:
	 * - GET `/skus/{sku.id}/subscriptions/{subscription.id}`
	 */
	skuSubscription(skuId: Snowflake, subscriptionId: Snowflake) {
		return `/skus/${skuId}/subscriptions/${subscriptionId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/channels/{channel.id}/send-soundboard-sound`
	 */
	sendSoundboardSound(channelId: Snowflake) {
		return `/channels/${channelId}/send-soundboard-sound` as const;
	},

	/**
	 * Route for:
	 * - GET `/soundboard-default-sounds`
	 */
	soundboardDefaultSounds() {
		return '/soundboard-default-sounds' as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/soundboard-sounds`
	 * - POST `/guilds/{guild.id}/soundboard-sounds`
	 */
	guildSoundboardSounds(guildId: Snowflake) {
		return `/guilds/${guildId}/soundboard-sounds` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
	 * - PATCH `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
	 * - DELETE `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
	 */
	guildSoundboardSound(guildId: Snowflake, soundId: Snowflake) {
		return `/guilds/${guildId}/soundboard-sounds/${soundId}` as const;
	},
};

for (const [key, fn] of Object.entries(Routes)) {
	Routes[key as keyof typeof Routes] = (...args: (boolean | number | string | undefined)[]) => {
		const escaped = args.map((arg) => {
			if (arg) {
				// Skip already "safe" urls
				if (urlSafeCharacters.test(String(arg))) {
					return arg;
				}

				return encodeURIComponent(arg);
			}

			return arg;
		});
		// eslint-disable-next-line no-useless-call
		return fn.call(null, ...escaped);
	};
}

// Freeze the object so it can't be changed
Object.freeze(Routes);

export const StickerPackApplicationId = '710982414301790216';

export type ImageSize = 1_024 | 2_048 | 4_096 | 16 | 32 | 64 | 128 | 256 | 512 | (number & {});

export enum ImageFormat {
	JPEG = 'jpeg',
	PNG = 'png',
	WebP = 'webp',
	GIF = 'gif',
	Lottie = 'json',
}

export const CDNRoutes = {
	/**
	 * Route for:
	 * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	emoji<Format extends EmojiFormat>(emojiId: Snowflake, format: Format) {
		return `/emojis/${emojiId}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/icons/{guild.id}/{guild.icon}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	guildIcon<Format extends GuildIconFormat>(guildId: Snowflake, guildIcon: string, format: Format) {
		return `/icons/${guildId}/${guildIcon}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	guildSplash<Format extends GuildSplashFormat>(guildId: Snowflake, guildSplash: string, format: Format) {
		return `/splashes/${guildId}/${guildSplash}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	guildDiscoverySplash<Format extends GuildDiscoverySplashFormat>(
		guildId: Snowflake,
		guildDiscoverySplash: string,
		format: Format,
	) {
		return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	guildBanner<Format extends GuildBannerFormat>(guildId: Snowflake, guildBanner: string, format: Format) {
		return `/banners/${guildId}/${guildBanner}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	userBanner<Format extends UserBannerFormat>(userId: Snowflake, userBanner: string, format: Format) {
		return `/banners/${userId}/${userBanner}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/embed/avatars/{index}.png`
	 *
	 * The value for `index` parameter depends on whether the user is {@link https://discord.com/developers/docs/change-log#unique-usernames-on-discord | migrated to the new username system}.
	 * For users on the new username system, `index` will be `(user.id >> 22) % 6`.
	 * For users on the legacy username system, `index` will be `user.discriminator % 5`.
	 *
	 * This route supports the extension: PNG
	 */
	defaultUserAvatar<Index extends DefaultUserAvatarAssets>(index: Index) {
		return `/embed/avatars/${index}.png` as const;
	},

	/**
	 * Route for:
	 * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	userAvatar<Format extends UserAvatarFormat>(userId: Snowflake, userAvatar: string, format: Format) {
		return `/avatars/${userId}/${userAvatar}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/{guild.id}/users/{user.id}/avatars/{guild_member.avatar}.{png|jpeg|webp|gif}`
	 *
	 * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	guildMemberAvatar<Format extends GuildMemberAvatarFormat>(
		guildId: Snowflake,
		userId: Snowflake,
		memberAvatar: string,
		format: Format,
	) {
		return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/avatar-decorations/{user.id}/{user.avatar_decoration}.png`
	 *
	 * This route supports the extension: PNG
	 *
	 * @deprecated Use {@link CDNRoutes.avatarDecoration} instead.
	 */
	userAvatarDecoration(userId: Snowflake, userAvatarDecoration: string) {
		return `/avatar-decorations/${userId}/${userAvatarDecoration}.png` as const;
	},

	/**
	 * Route for:
	 * - GET `/avatar-decoration-presets/{avatar_decoration_data_asset}.png`
	 *
	 * This route supports the extension: PNG
	 */
	avatarDecoration(avatarDecorationDataAsset: string) {
		return `/avatar-decoration-presets/${avatarDecorationDataAsset}.png` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	applicationIcon<Format extends ApplicationIconFormat>(
		applicationId: Snowflake,
		applicationIcon: string,
		format: Format,
	) {
		return `/app-icons/${applicationId}/${applicationIcon}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	applicationCover<Format extends ApplicationCoverFormat>(
		applicationId: Snowflake,
		applicationCoverImage: string,
		format: Format,
	) {
		return `/app-icons/${applicationId}/${applicationCoverImage}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-assets/{application.id}/{application.asset_id}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	applicationAsset<Format extends ApplicationAssetFormat>(
		applicationId: Snowflake,
		applicationAssetId: string,
		format: Format,
	) {
		return `/app-assets/${applicationId}/${applicationAssetId}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	achievementIcon<Format extends AchievementIconFormat>(
		applicationId: Snowflake,
		achievementId: Snowflake,
		achievementIconHash: string,
		format: Format,
	) {
		return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	stickerPackBanner<Format extends StickerPackBannerFormat>(stickerPackBannerAssetId: Snowflake, format: Format) {
		return `/app-assets/${StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/app-assets/${application.id}/store/${asset.id}.{png|jpeg|webp}}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	storePageAsset<Format extends StorePageAssetFormat = ImageFormat.PNG>(
		applicationId: Snowflake,
		assetId: string,
		format: Format = ImageFormat.PNG as Format,
	) {
		return `/app-assets/${applicationId}/store/${assetId}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	teamIcon<Format extends TeamIconFormat>(teamId: Snowflake, teamIcon: string, format: Format) {
		return `/team-icons/${teamId}/${teamIcon}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/stickers/{sticker.id}.{png|json}`
	 *
	 * This route supports the extensions: PNG, Lottie, GIF
	 */
	sticker<Format extends StickerFormat>(stickerId: Snowflake, format: Format) {
		return `/stickers/${stickerId}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	roleIcon<Format extends RoleIconFormat>(roleId: Snowflake, roleIcon: string, format: Format) {
		return `/role-icons/${roleId}/${roleIcon}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	guildScheduledEventCover<Format extends GuildScheduledEventCoverFormat>(
		guildScheduledEventId: Snowflake,
		guildScheduledEventCoverImage: string,
		format: Format,
	) {
		return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP, GIF
	 */
	guildMemberBanner<Format extends GuildMemberBannerFormat>(
		guildId: Snowflake,
		userId: Snowflake,
		guildMemberBanner: string,
		format: Format,
	) {
		return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}` as const;
	},

	/**
	 * Route for:
	 * - GET `/soundboard-sounds/${sound.id}`
	 */
	soundboardSound(soundId: Snowflake) {
		return `/soundboard-sounds/${soundId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/guild-tag-badges/{guild.id}/{badge}.{png|jpeg|webp}`
	 *
	 * This route supports the extensions: PNG, JPEG, WebP
	 */
	guildTagBadge<Format extends GuildTagBadgeFormat>(guildId: Snowflake, guildTagBadge: string, format: Format) {
		return `/guild-tag-badges/${guildId}/${guildTagBadge}.${format}` as const;
	},
};

for (const [key, fn] of Object.entries(CDNRoutes)) {
	CDNRoutes[key as keyof typeof CDNRoutes] = (...args: (boolean | number | string | undefined)[]) => {
		const escaped = args.map((arg) => {
			if (arg) {
				// Skip already "safe" urls
				if (urlSafeCharacters.test(String(arg))) {
					return arg;
				}

				return encodeURIComponent(arg);
			}

			return arg;
		});
		// eslint-disable-next-line no-useless-call
		return fn.call(null, ...escaped);
	};
}

// Freeze the object so it can't be changed
Object.freeze(CDNRoutes);

export type DefaultUserAvatarAssets = 0 | 1 | 2 | 3 | 4 | 5;

export type EmojiFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildIconFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildSplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildDiscoverySplashFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type UserBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type DefaultUserAvatarFormat = Extract<ImageFormat, ImageFormat.PNG>;
export type UserAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildMemberAvatarFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type ApplicationIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type ApplicationAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type AchievementIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerPackBannerFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type TeamIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StorePageAssetFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type StickerFormat = Extract<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie | ImageFormat.PNG>;
export type RoleIconFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildScheduledEventCoverFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;
export type GuildMemberBannerFormat = Exclude<ImageFormat, ImageFormat.Lottie>;
export type GuildTagBadgeFormat = Exclude<ImageFormat, ImageFormat.GIF | ImageFormat.Lottie>;

/**
 * @deprecated Use {@link DefaultUserAvatarFormat} instead.
 */
export type DefaultUserAvatar = DefaultUserAvatarFormat;

export interface CDNQuery {
	/**
	 * The returned image can have the size changed by using this query parameter
	 *
	 * Image size can be any power of two between 16 and 4096
	 */
	size?: ImageSize;
}

export const RouteBases = {
	api: `https://discord.com/api/v${APIVersion}`,
	cdn: 'https://cdn.discordapp.com',
	media: 'https://media.discordapp.net',
	invite: 'https://discord.gg',
	template: 'https://discord.new',
	gift: 'https://discord.gift',
	scheduledEvent: 'https://discord.com/events',
} as const;

// Freeze bases object
Object.freeze(RouteBases);

export const OAuth2Routes = {
	authorizationURL: `${RouteBases.api}${Routes.oauth2Authorization()}`,
	tokenURL: `${RouteBases.api}${Routes.oauth2TokenExchange()}`,
	/**
	 * @see {@link https://tools.ietf.org/html/rfc7009}
	 */
	tokenRevocationURL: `${RouteBases.api}${Routes.oauth2TokenRevocation()}`,
} as const;

// Freeze OAuth2 route object
Object.freeze(OAuth2Routes);
