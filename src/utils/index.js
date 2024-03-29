/* eslint-disable camelcase */
// eslint-disable-next-line object-curly-newline
const mapDBToModel = ({ id, title, tags, body, created_at, updated_at, username }) => ({
  id,
  title,
  tags,
  body,
  createdAt: created_at,
  updatedAt: updated_at,
  username,
});

module.exports = { mapDBToModel };
