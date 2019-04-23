# README
writer yotuba088

# Description
chat-space is chat app (Tech Expert curriculum)

# Features
- ユーザー新規登録・ログイン機能
- 非同期通信によるメッセージ投稿
- チャットグループ作成・編集・削除
- インクリメンタルサーチ機能

# Requirement
- Ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18]
- Rails 5.2.2

# Development Period
2019/03/01-03/16

## group_users TB
| user_id | references | null :false, foreign_key :true |
| group_id | references | null :false, foreign_key :true |

- belongs_to :user
- belongs_to :group

## messages TB
| content |	text |
| image | string |
| user_id | references | null :false, foreign_key :true |
| group_id | references | null :false, foreign_key :true |

- belongs_to :user
- belongs_to :group

## users TB
| name | string | null :false, unique :true |
| email | string | null :false, unique :true |

- has_many :messages
- has_many :group_users
- has_many :group, through::group_users

## groups TB
| name | string | null :false, unique :true, index |

- has_many :messages
- has_many :group_users
- has_many :users through::group_users
