export default {
    "scalars": [
        0,
        2,
        3,
        5,
        7,
        19,
        30,
        42,
        60,
        72,
        84,
        100,
        111,
        115,
        117,
        124,
        138,
        146,
        153,
        165,
        177,
        189,
        197,
        207,
        217,
        221,
        228,
        238,
        246,
        251,
        253,
        268,
        280,
        281,
        282,
        294,
        312,
        324,
        336,
        344,
        346,
        359,
        371,
        372,
        373,
        385,
        408,
        416,
        424,
        429,
        440,
        452,
        480,
        491,
        492,
        493,
        494,
        495,
        496,
        497,
        498,
        499,
        511,
        524,
        534,
        542,
        552,
        561,
        569,
        585,
        600,
        612,
        622,
        632,
        662,
        674,
        675,
        676,
        677,
        678,
        679,
        680,
        681,
        682,
        694,
        712,
        723,
        735,
        751,
        761,
        765,
        771,
        779,
        783,
        790,
        800,
        808,
        813,
        825,
        837,
        849,
        857,
        859,
        871,
        882,
        894,
        902,
        914,
        926,
        938,
        951,
        961,
        969,
        985,
        996,
        1008,
        1026,
        1038,
        1050,
        1063,
        1073,
        1081,
        1091,
        1099,
        1107,
        1122,
        1133,
        1145,
        1172,
        1201,
        1212,
        1224,
        1236,
        1245,
        1249,
        1251,
        1263,
        1275,
        1287,
        1305,
        1317,
        1329,
        1347,
        1359,
        1371,
        1389,
        1400,
        1412,
        1426,
        1440,
        1448,
        1463,
        1475,
        1487,
        1500,
        1509,
        1517
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                7
            ],
            "_gt": [
                7
            ],
            "_gte": [
                7
            ],
            "_in": [
                7
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                7
            ],
            "_lte": [
                7
            ],
            "_neq": [
                7
            ],
            "_nin": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate": {
            "aggregate": [
                13
            ],
            "nodes": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_bool_exp": {
            "count": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_bool_exp_count": {
            "arguments": [
                30
            ],
            "distinct": [
                0
            ],
            "filter": [
                18
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_fields": {
            "avg": [
                16
            ],
            "count": [
                3,
                {
                    "columns": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                22
            ],
            "min": [
                24
            ],
            "stddev": [
                32
            ],
            "stddev_pop": [
                34
            ],
            "stddev_samp": [
                36
            ],
            "sum": [
                40
            ],
            "var_pop": [
                44
            ],
            "var_samp": [
                46
            ],
            "variance": [
                48
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_order_by": {
            "avg": [
                17
            ],
            "count": [
                346
            ],
            "max": [
                23
            ],
            "min": [
                25
            ],
            "stddev": [
                33
            ],
            "stddev_pop": [
                35
            ],
            "stddev_samp": [
                37
            ],
            "sum": [
                41
            ],
            "var_pop": [
                45
            ],
            "var_samp": [
                47
            ],
            "variance": [
                49
            ],
            "__typename": [
                5
            ]
        },
        "candles_arr_rel_insert_input": {
            "data": [
                21
            ],
            "on_conflict": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "candles_avg_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_avg_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_bool_exp": {
            "_and": [
                18
            ],
            "_not": [
                18
            ],
            "_or": [
                18
            ],
            "candle_average": [
                8
            ],
            "candle_duration": [
                4
            ],
            "close": [
                8
            ],
            "cond_market_twap": [
                8
            ],
            "high": [
                8
            ],
            "low": [
                8
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                860
            ],
            "volume": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "candles_constraint": {},
        "candles_inc_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "open": [
                7
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_insert_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_max_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_max_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_min_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_min_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "candles_on_conflict": {
            "constraint": [
                19
            ],
            "update_columns": [
                42
            ],
            "where": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "candles_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_pk_columns_input": {
            "candle_duration": [
                3
            ],
            "market_acct": [
                5
            ],
            "timestamp": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "candles_select_column": {},
        "candles_set_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_pop_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_pop_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_samp_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_samp_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_stream_cursor_input": {
            "initial_value": [
                39
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "candles_stream_cursor_value_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                859
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_sum_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "open": [
                7
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_sum_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_update_column": {},
        "candles_updates": {
            "_inc": [
                20
            ],
            "_set": [
                31
            ],
            "where": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_pop_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_pop_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_samp_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_samp_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "candles_variance_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_variance_order_by": {
            "candle_average": [
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments": {
            "comment": [
                50
            ],
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                702,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_aggregate": [
                703,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate": {
            "aggregate": [
                54
            ],
            "nodes": [
                50
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_bool_exp": {
            "count": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_bool_exp_count": {
            "arguments": [
                72
            ],
            "distinct": [
                0
            ],
            "filter": [
                59
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_fields": {
            "avg": [
                57
            ],
            "count": [
                3,
                {
                    "columns": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                63
            ],
            "min": [
                65
            ],
            "stddev": [
                74
            ],
            "stddev_pop": [
                76
            ],
            "stddev_samp": [
                78
            ],
            "sum": [
                82
            ],
            "var_pop": [
                86
            ],
            "var_samp": [
                88
            ],
            "variance": [
                90
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_order_by": {
            "avg": [
                58
            ],
            "count": [
                346
            ],
            "max": [
                64
            ],
            "min": [
                66
            ],
            "stddev": [
                75
            ],
            "stddev_pop": [
                77
            ],
            "stddev_samp": [
                79
            ],
            "sum": [
                83
            ],
            "var_pop": [
                87
            ],
            "var_samp": [
                89
            ],
            "variance": [
                91
            ],
            "__typename": [
                5
            ]
        },
        "comments_arr_rel_insert_input": {
            "data": [
                62
            ],
            "on_conflict": [
                69
            ],
            "__typename": [
                5
            ]
        },
        "comments_avg_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_avg_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_bool_exp": {
            "_and": [
                59
            ],
            "_not": [
                59
            ],
            "_or": [
                59
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "commentor_acct": [
                6
            ],
            "comments": [
                59
            ],
            "comments_aggregate": [
                52
            ],
            "content": [
                6
            ],
            "created_at": [
                860
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                711
            ],
            "reactions_aggregate": [
                704
            ],
            "responding_comment_id": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "comments_constraint": {},
        "comments_inc_input": {
            "comment_id": [
                7
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_insert_input": {
            "comment": [
                68
            ],
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "comments": [
                56
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                708
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_max_fields": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_max_order_by": {
            "comment_id": [
                346
            ],
            "commentor_acct": [
                346
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_min_fields": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_min_order_by": {
            "comment_id": [
                346
            ],
            "commentor_acct": [
                346
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                50
            ],
            "__typename": [
                5
            ]
        },
        "comments_obj_rel_insert_input": {
            "data": [
                62
            ],
            "on_conflict": [
                69
            ],
            "__typename": [
                5
            ]
        },
        "comments_on_conflict": {
            "constraint": [
                60
            ],
            "update_columns": [
                84
            ],
            "where": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "comments_order_by": {
            "comment": [
                70
            ],
            "comment_id": [
                346
            ],
            "commentor_acct": [
                346
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "reactions_aggregate": [
                707
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_pk_columns_input": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_select_column": {},
        "comments_set_input": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_pop_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_pop_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_samp_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_samp_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_stream_cursor_input": {
            "initial_value": [
                81
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "comments_stream_cursor_value_input": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                859
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_sum_fields": {
            "comment_id": [
                7
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_sum_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_update_column": {},
        "comments_updates": {
            "_inc": [
                61
            ],
            "_set": [
                73
            ],
            "where": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_pop_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_pop_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_samp_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_samp_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "comments_variance_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_variance_order_by": {
            "comment_id": [
                346
            ],
            "responding_comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "proposals": [
                642,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                642,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                643,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_aggregate": [
                643,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                946
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate": {
            "aggregate": [
                96
            ],
            "nodes": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_bool_exp": {
            "count": [
                95
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_bool_exp_count": {
            "arguments": [
                111
            ],
            "distinct": [
                0
            ],
            "filter": [
                99
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                102
            ],
            "min": [
                104
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_order_by": {
            "count": [
                346
            ],
            "max": [
                103
            ],
            "min": [
                105
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_arr_rel_insert_input": {
            "data": [
                101
            ],
            "on_conflict": [
                108
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_bool_exp": {
            "_and": [
                99
            ],
            "_not": [
                99
            ],
            "_or": [
                99
            ],
            "cond_finalize_token_mint_acct": [
                6
            ],
            "cond_revert_token_mint_acct": [
                6
            ],
            "cond_vault_acct": [
                6
            ],
            "nonce": [
                6
            ],
            "proposals": [
                661
            ],
            "proposalsByQuoteVault": [
                661
            ],
            "proposalsByQuoteVault_aggregate": [
                644
            ],
            "proposals_aggregate": [
                644
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                950
            ],
            "underlying_mint_acct": [
                6
            ],
            "underlying_token_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_constraint": {},
        "conditional_vaults_insert_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "proposals": [
                658
            ],
            "proposalsByQuoteVault": [
                658
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                957
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_max_fields": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_max_order_by": {
            "cond_finalize_token_mint_acct": [
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_min_fields": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_min_order_by": {
            "cond_finalize_token_mint_acct": [
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_obj_rel_insert_input": {
            "data": [
                101
            ],
            "on_conflict": [
                108
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_on_conflict": {
            "constraint": [
                100
            ],
            "update_columns": [
                115
            ],
            "where": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_order_by": {
            "cond_finalize_token_mint_acct": [
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "proposalsByQuoteVault_aggregate": [
                657
            ],
            "proposals_aggregate": [
                657
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "token": [
                959
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_pk_columns_input": {
            "cond_vault_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_select_column": {},
        "conditional_vaults_set_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_stream_cursor_input": {
            "initial_value": [
                114
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_stream_cursor_value_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_update_column": {},
        "conditional_vaults_updates": {
            "_set": [
                112
            ],
            "where": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "cursor_ordering": {},
        "dao_details": {
            "admin_accts": [
                253,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "is_hide": [
                0
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "socials": [
                253,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "v0_4_metric_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_metric_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate": {
            "aggregate": [
                120
            ],
            "nodes": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate_fields": {
            "avg": [
                122
            ],
            "count": [
                3,
                {
                    "columns": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                130
            ],
            "min": [
                131
            ],
            "stddev": [
                140
            ],
            "stddev_pop": [
                141
            ],
            "stddev_samp": [
                142
            ],
            "sum": [
                145
            ],
            "var_pop": [
                148
            ],
            "var_samp": [
                149
            ],
            "variance": [
                150
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_append_input": {
            "admin_accts": [
                253
            ],
            "socials": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_avg_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_bool_exp": {
            "_and": [
                123
            ],
            "_not": [
                123
            ],
            "_or": [
                123
            ],
            "admin_accts": [
                255
            ],
            "creator_acct": [
                6
            ],
            "dao_id": [
                8
            ],
            "daos": [
                164
            ],
            "daos_aggregate": [
                157
            ],
            "description": [
                6
            ],
            "fail_token_image_url": [
                6
            ],
            "github": [
                6
            ],
            "image_url": [
                6
            ],
            "is_hide": [
                1
            ],
            "lp_token_image_url": [
                6
            ],
            "name": [
                6
            ],
            "pass_token_image_url": [
                6
            ],
            "slug": [
                6
            ],
            "socials": [
                255
            ],
            "token_image_url": [
                6
            ],
            "url": [
                6
            ],
            "v0_4_metric_decisions": [
                1388
            ],
            "v0_4_metric_decisions_aggregate": [
                1381
            ],
            "x_account": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_constraint": {},
        "dao_details_delete_at_path_input": {
            "admin_accts": [
                5
            ],
            "socials": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_delete_elem_input": {
            "admin_accts": [
                3
            ],
            "socials": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_delete_key_input": {
            "admin_accts": [
                5
            ],
            "socials": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_inc_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_insert_input": {
            "admin_accts": [
                253
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "daos": [
                161
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "is_hide": [
                0
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "socials": [
                253
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "v0_4_metric_decisions": [
                1385
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_max_fields": {
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_min_fields": {
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_obj_rel_insert_input": {
            "data": [
                129
            ],
            "on_conflict": [
                134
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_on_conflict": {
            "constraint": [
                124
            ],
            "update_columns": [
                146
            ],
            "where": [
                123
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_order_by": {
            "admin_accts": [
                346
            ],
            "creator_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "daos_aggregate": [
                160
            ],
            "description": [
                346
            ],
            "fail_token_image_url": [
                346
            ],
            "github": [
                346
            ],
            "image_url": [
                346
            ],
            "is_hide": [
                346
            ],
            "lp_token_image_url": [
                346
            ],
            "name": [
                346
            ],
            "pass_token_image_url": [
                346
            ],
            "slug": [
                346
            ],
            "socials": [
                346
            ],
            "token_image_url": [
                346
            ],
            "url": [
                346
            ],
            "v0_4_metric_decisions_aggregate": [
                1384
            ],
            "x_account": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_pk_columns_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_prepend_input": {
            "admin_accts": [
                253
            ],
            "socials": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_select_column": {},
        "dao_details_set_input": {
            "admin_accts": [
                253
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "is_hide": [
                0
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "socials": [
                253
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stream_cursor_input": {
            "initial_value": [
                144
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stream_cursor_value_input": {
            "admin_accts": [
                253
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "is_hide": [
                0
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "socials": [
                253
            ],
            "token_image_url": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_sum_fields": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_update_column": {},
        "dao_details_updates": {
            "_append": [
                121
            ],
            "_delete_at_path": [
                125
            ],
            "_delete_elem": [
                126
            ],
            "_delete_key": [
                127
            ],
            "_inc": [
                128
            ],
            "_prepend": [
                137
            ],
            "_set": [
                139
            ],
            "where": [
                123
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_var_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_var_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_variance_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_trader": {
            "total_volume": [
                7
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_trader_bool_exp_bool_exp": {
            "_and": [
                152
            ],
            "_not": [
                152
            ],
            "_or": [
                152
            ],
            "total_volume": [
                8
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "dao_trader_enum_name": {},
        "dao_trader_order_by": {
            "total_volume": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                118
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program": [
                519
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                642,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_aggregate": [
                643,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                946
            ],
            "tokenByBaseAcct": [
                946
            ],
            "tokenByQuoteAcct": [
                946
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "user_performances": [
                1191,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performances_aggregate": [
                1192,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                159
            ],
            "nodes": [
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp": {
            "count": [
                158
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp_count": {
            "arguments": [
                177
            ],
            "distinct": [
                0
            ],
            "filter": [
                164
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_fields": {
            "avg": [
                162
            ],
            "count": [
                3,
                {
                    "columns": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                168
            ],
            "min": [
                170
            ],
            "stddev": [
                179
            ],
            "stddev_pop": [
                181
            ],
            "stddev_samp": [
                183
            ],
            "sum": [
                187
            ],
            "var_pop": [
                191
            ],
            "var_samp": [
                193
            ],
            "variance": [
                195
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_order_by": {
            "avg": [
                163
            ],
            "count": [
                346
            ],
            "max": [
                169
            ],
            "min": [
                171
            ],
            "stddev": [
                180
            ],
            "stddev_pop": [
                182
            ],
            "stddev_samp": [
                184
            ],
            "sum": [
                188
            ],
            "var_pop": [
                192
            ],
            "var_samp": [
                194
            ],
            "variance": [
                196
            ],
            "__typename": [
                5
            ]
        },
        "daos_arr_rel_insert_input": {
            "data": [
                167
            ],
            "on_conflict": [
                174
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_bool_exp": {
            "_and": [
                164
            ],
            "_not": [
                164
            ],
            "_or": [
                164
            ],
            "base_acct": [
                6
            ],
            "created_at": [
                860
            ],
            "dao_acct": [
                6
            ],
            "dao_detail": [
                123
            ],
            "dao_id": [
                8
            ],
            "min_base_futarchic_liquidity": [
                8
            ],
            "min_quote_futarchic_liquidity": [
                8
            ],
            "pass_threshold_bps": [
                8
            ],
            "program": [
                523
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                661
            ],
            "proposals_aggregate": [
                644
            ],
            "quote_acct": [
                6
            ],
            "slots_per_proposal": [
                8
            ],
            "token": [
                950
            ],
            "tokenByBaseAcct": [
                950
            ],
            "tokenByQuoteAcct": [
                950
            ],
            "treasury_acct": [
                6
            ],
            "twap_initial_observation": [
                8
            ],
            "twap_max_observation_change_per_update": [
                8
            ],
            "updated_at": [
                860
            ],
            "user_performances": [
                1200
            ],
            "user_performances_aggregate": [
                1193
            ],
            "__typename": [
                5
            ]
        },
        "daos_constraint": {},
        "daos_inc_input": {
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_insert_input": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                133
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program": [
                530
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                658
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                957
            ],
            "tokenByBaseAcct": [
                957
            ],
            "tokenByQuoteAcct": [
                957
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "user_performances": [
                1197
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_fields": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program_acct": [
                346
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_fields": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program_acct": [
                346
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_obj_rel_insert_input": {
            "data": [
                167
            ],
            "on_conflict": [
                174
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                165
            ],
            "update_columns": [
                189
            ],
            "where": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_detail": [
                135
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program": [
                532
            ],
            "program_acct": [
                346
            ],
            "proposals_aggregate": [
                657
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "token": [
                959
            ],
            "tokenByBaseAcct": [
                959
            ],
            "tokenByQuoteAcct": [
                959
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "user_performances_aggregate": [
                1196
            ],
            "__typename": [
                5
            ]
        },
        "daos_pk_columns_input": {
            "dao_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "daos_select_column": {},
        "daos_set_input": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_input": {
            "initial_value": [
                186
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_value_input": {
            "base_acct": [
                5
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_fields": {
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                166
            ],
            "_set": [
                178
            ],
            "where": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                197
            ],
            "_gt": [
                197
            ],
            "_gte": [
                197
            ],
            "_in": [
                197
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                197
            ],
            "_lte": [
                197
            ],
            "_neq": [
                197
            ],
            "_nin": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies": {
            "acct": [
                5
            ],
            "indexer": [
                223
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "transaction": [
                1058
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate": {
            "aggregate": [
                203
            ],
            "nodes": [
                199
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp": {
            "count": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp_count": {
            "arguments": [
                217
            ],
            "distinct": [
                0
            ],
            "filter": [
                206
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                209
            ],
            "min": [
                211
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_order_by": {
            "count": [
                346
            ],
            "max": [
                210
            ],
            "min": [
                212
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_arr_rel_insert_input": {
            "data": [
                208
            ],
            "on_conflict": [
                214
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_bool_exp": {
            "_and": [
                206
            ],
            "_not": [
                206
            ],
            "_or": [
                206
            ],
            "acct": [
                6
            ],
            "indexer": [
                227
            ],
            "latest_tx_sig_processed": [
                6
            ],
            "name": [
                6
            ],
            "status": [
                6
            ],
            "transaction": [
                1062
            ],
            "updated_at": [
                860
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_constraint": {},
        "indexer_account_dependencies_insert_input": {
            "acct": [
                5
            ],
            "indexer": [
                234
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "transaction": [
                1069
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_fields": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_order_by": {
            "acct": [
                346
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_fields": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_order_by": {
            "acct": [
                346
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                199
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_on_conflict": {
            "constraint": [
                207
            ],
            "update_columns": [
                221
            ],
            "where": [
                206
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_order_by": {
            "acct": [
                346
            ],
            "indexer": [
                236
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "transaction": [
                1071
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_pk_columns_input": {
            "acct": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_select_column": {},
        "indexer_account_dependencies_set_input": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_input": {
            "initial_value": [
                220
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_value_input": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_update_column": {},
        "indexer_account_dependencies_updates": {
            "_set": [
                218
            ],
            "where": [
                206
            ],
            "__typename": [
                5
            ]
        },
        "indexers": {
            "implementation": [
                5
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate": {
            "aggregate": [
                225
            ],
            "nodes": [
                223
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate_fields": {
            "avg": [
                226
            ],
            "count": [
                3,
                {
                    "columns": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                231
            ],
            "min": [
                232
            ],
            "stddev": [
                240
            ],
            "stddev_pop": [
                241
            ],
            "stddev_samp": [
                242
            ],
            "sum": [
                245
            ],
            "var_pop": [
                248
            ],
            "var_samp": [
                249
            ],
            "variance": [
                250
            ],
            "__typename": [
                5
            ]
        },
        "indexers_avg_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_bool_exp": {
            "_and": [
                227
            ],
            "_not": [
                227
            ],
            "_or": [
                227
            ],
            "implementation": [
                6
            ],
            "indexer_account_dependencies": [
                206
            ],
            "indexer_account_dependencies_aggregate": [
                201
            ],
            "indexer_type": [
                6
            ],
            "latest_slot_processed": [
                8
            ],
            "name": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "indexers_constraint": {},
        "indexers_inc_input": {
            "latest_slot_processed": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "indexers_insert_input": {
            "implementation": [
                5
            ],
            "indexer_account_dependencies": [
                205
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_max_fields": {
            "implementation": [
                5
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_min_fields": {
            "implementation": [
                5
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                223
            ],
            "__typename": [
                5
            ]
        },
        "indexers_obj_rel_insert_input": {
            "data": [
                230
            ],
            "on_conflict": [
                235
            ],
            "__typename": [
                5
            ]
        },
        "indexers_on_conflict": {
            "constraint": [
                228
            ],
            "update_columns": [
                246
            ],
            "where": [
                227
            ],
            "__typename": [
                5
            ]
        },
        "indexers_order_by": {
            "implementation": [
                346
            ],
            "indexer_account_dependencies_aggregate": [
                204
            ],
            "indexer_type": [
                346
            ],
            "latest_slot_processed": [
                346
            ],
            "name": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "indexers_pk_columns_input": {
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_select_column": {},
        "indexers_set_input": {
            "implementation": [
                5
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_pop_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_samp_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stream_cursor_input": {
            "initial_value": [
                244
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stream_cursor_value_input": {
            "implementation": [
                5
            ],
            "indexer_type": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_sum_fields": {
            "latest_slot_processed": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "indexers_update_column": {},
        "indexers_updates": {
            "_inc": [
                229
            ],
            "_set": [
                239
            ],
            "where": [
                227
            ],
            "__typename": [
                5
            ]
        },
        "indexers_var_pop_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_var_samp_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_variance_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "interval": {},
        "interval_comparison_exp": {
            "_eq": [
                251
            ],
            "_gt": [
                251
            ],
            "_gte": [
                251
            ],
            "_in": [
                251
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                251
            ],
            "_lte": [
                251
            ],
            "_neq": [
                251
            ],
            "_nin": [
                251
            ],
            "__typename": [
                5
            ]
        },
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                254
            ],
            "_contained_in": [
                253
            ],
            "_contains": [
                253
            ],
            "_eq": [
                253
            ],
            "_gt": [
                253
            ],
            "_gte": [
                253
            ],
            "_has_key": [
                5
            ],
            "_has_keys_all": [
                5
            ],
            "_has_keys_any": [
                5
            ],
            "_in": [
                253
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                253
            ],
            "_lte": [
                253
            ],
            "_neq": [
                253
            ],
            "_nin": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "makes": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "order": [
                347
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "takes": [
                815,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_aggregate": [
                816,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                262
            ],
            "nodes": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                259
            ],
            "bool_or": [
                260
            ],
            "count": [
                261
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                281
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_or": {
            "arguments": [
                282
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_count": {
            "arguments": [
                280
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_fields": {
            "avg": [
                265
            ],
            "count": [
                3,
                {
                    "columns": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                271
            ],
            "min": [
                273
            ],
            "stddev": [
                284
            ],
            "stddev_pop": [
                286
            ],
            "stddev_samp": [
                288
            ],
            "sum": [
                292
            ],
            "var_pop": [
                296
            ],
            "var_samp": [
                298
            ],
            "variance": [
                300
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                266
            ],
            "count": [
                346
            ],
            "max": [
                272
            ],
            "min": [
                274
            ],
            "stddev": [
                285
            ],
            "stddev_pop": [
                287
            ],
            "stddev_samp": [
                289
            ],
            "sum": [
                293
            ],
            "var_pop": [
                297
            ],
            "var_samp": [
                299
            ],
            "variance": [
                301
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                270
            ],
            "on_conflict": [
                277
            ],
            "__typename": [
                5
            ]
        },
        "makes_avg_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_avg_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                267
            ],
            "_not": [
                267
            ],
            "_or": [
                267
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "order": [
                358
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
            ],
            "takes": [
                824
            ],
            "takes_aggregate": [
                817
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                860
            ],
            "__typename": [
                5
            ]
        },
        "makes_constraint": {},
        "makes_inc_input": {
            "filled_base_amount": [
                7
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "makes_insert_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "order": [
                367
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "takes": [
                821
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_fields": {
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_fields": {
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                270
            ],
            "on_conflict": [
                277
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                268
            ],
            "update_columns": [
                294
            ],
            "where": [
                267
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                346
            ],
            "is_active": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order": [
                369
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "takes_aggregate": [
                820
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "makes_select_column": {},
        "makes_select_column_makes_aggregate_bool_exp_bool_and_arguments_columns": {},
        "makes_select_column_makes_aggregate_bool_exp_bool_or_arguments_columns": {},
        "makes_set_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_pop_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_pop_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_samp_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_samp_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                291
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_value_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "makes_sum_fields": {
            "filled_base_amount": [
                7
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "makes_sum_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                269
            ],
            "_set": [
                283
            ],
            "where": [
                267
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_pop_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_pop_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_samp_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_samp_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_variance_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_variance_order_by": {
            "filled_base_amount": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                815,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_aggregate": [
                816,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "token": [
                946
            ],
            "tokenAcctByAsksTokenAcct": [
                904
            ],
            "tokenAcctByBidsTokenAcct": [
                904
            ],
            "tokenByBaseMintAcct": [
                946
            ],
            "tokenByQuoteMintAcct": [
                946
            ],
            "token_acct": [
                904
            ],
            "twaps": [
                1112,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_aggregate": [
                1113,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                306
            ],
            "nodes": [
                302
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                305
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                324
            ],
            "distinct": [
                0
            ],
            "filter": [
                311
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_fields": {
            "avg": [
                309
            ],
            "count": [
                3,
                {
                    "columns": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                315
            ],
            "min": [
                317
            ],
            "stddev": [
                326
            ],
            "stddev_pop": [
                328
            ],
            "stddev_samp": [
                330
            ],
            "sum": [
                334
            ],
            "var_pop": [
                338
            ],
            "var_samp": [
                340
            ],
            "variance": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                310
            ],
            "count": [
                346
            ],
            "max": [
                316
            ],
            "min": [
                318
            ],
            "stddev": [
                327
            ],
            "stddev_pop": [
                329
            ],
            "stddev_samp": [
                331
            ],
            "sum": [
                335
            ],
            "var_pop": [
                339
            ],
            "var_samp": [
                341
            ],
            "variance": [
                343
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                314
            ],
            "on_conflict": [
                321
            ],
            "__typename": [
                5
            ]
        },
        "markets_avg_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_avg_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                311
            ],
            "_not": [
                311
            ],
            "_or": [
                311
            ],
            "active_slot": [
                8
            ],
            "asks_token_acct": [
                6
            ],
            "base_lot_size": [
                8
            ],
            "base_maker_fee": [
                814
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                814
            ],
            "bids_token_acct": [
                6
            ],
            "candles": [
                18
            ],
            "candles_aggregate": [
                11
            ],
            "create_tx_sig": [
                6
            ],
            "created_at": [
                860
            ],
            "inactive_slot": [
                8
            ],
            "makes": [
                267
            ],
            "makes_aggregate": [
                258
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                358
            ],
            "orders_aggregate": [
                349
            ],
            "prices": [
                402
            ],
            "prices_aggregate": [
                395
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                814
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                814
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                824
            ],
            "takes_aggregate": [
                817
            ],
            "token": [
                950
            ],
            "tokenAcctByAsksTokenAcct": [
                913
            ],
            "tokenAcctByBidsTokenAcct": [
                913
            ],
            "tokenByBaseMintAcct": [
                950
            ],
            "tokenByQuoteMintAcct": [
                950
            ],
            "token_acct": [
                913
            ],
            "twaps": [
                1121
            ],
            "twaps_aggregate": [
                1114
            ],
            "__typename": [
                5
            ]
        },
        "markets_constraint": {},
        "markets_inc_input": {
            "active_slot": [
                7
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_taker_fee": [
                813
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_insert_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "candles": [
                15
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                264
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                355
            ],
            "prices": [
                399
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                821
            ],
            "token": [
                957
            ],
            "tokenAcctByAsksTokenAcct": [
                922
            ],
            "tokenAcctByBidsTokenAcct": [
                922
            ],
            "tokenByBaseMintAcct": [
                957
            ],
            "tokenByQuoteMintAcct": [
                957
            ],
            "token_acct": [
                922
            ],
            "twaps": [
                1118
            ],
            "__typename": [
                5
            ]
        },
        "markets_max_fields": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_max_order_by": {
            "active_slot": [
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_min_fields": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_min_order_by": {
            "active_slot": [
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                302
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                314
            ],
            "on_conflict": [
                321
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                312
            ],
            "update_columns": [
                336
            ],
            "where": [
                311
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "makes_aggregate": [
                263
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "orders_aggregate": [
                354
            ],
            "prices_aggregate": [
                398
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "takes_aggregate": [
                820
            ],
            "token": [
                959
            ],
            "tokenAcctByAsksTokenAcct": [
                924
            ],
            "tokenAcctByBidsTokenAcct": [
                924
            ],
            "tokenByBaseMintAcct": [
                959
            ],
            "tokenByQuoteMintAcct": [
                959
            ],
            "token_acct": [
                924
            ],
            "twaps_aggregate": [
                1117
            ],
            "__typename": [
                5
            ]
        },
        "markets_pk_columns_input": {
            "market_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "markets_select_column": {},
        "markets_set_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_pop_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_pop_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_samp_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_samp_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                333
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_value_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                813
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                859
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_sum_fields": {
            "active_slot": [
                7
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                813
            ],
            "base_taker_fee": [
                813
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                813
            ],
            "quote_taker_fee": [
                813
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_sum_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                313
            ],
            "_set": [
                325
            ],
            "where": [
                311
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_pop_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_pop_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_samp_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_samp_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_variance_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_variance_order_by": {
            "active_slot": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                344
            ],
            "_gt": [
                344
            ],
            "_gte": [
                344
            ],
            "_in": [
                344
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                344
            ],
            "_lte": [
                344
            ],
            "_neq": [
                344
            ],
            "_nin": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "order_by": {},
        "orders": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "make": [
                256
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "take": [
                815
            ],
            "transaction": [
                1058
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "user": [
                1232
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                353
            ],
            "nodes": [
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                350
            ],
            "bool_or": [
                351
            ],
            "count": [
                352
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                372
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_or": {
            "arguments": [
                373
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_count": {
            "arguments": [
                371
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_fields": {
            "avg": [
                356
            ],
            "count": [
                3,
                {
                    "columns": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                362
            ],
            "min": [
                364
            ],
            "stddev": [
                375
            ],
            "stddev_pop": [
                377
            ],
            "stddev_samp": [
                379
            ],
            "sum": [
                383
            ],
            "var_pop": [
                387
            ],
            "var_samp": [
                389
            ],
            "variance": [
                391
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                357
            ],
            "count": [
                346
            ],
            "max": [
                363
            ],
            "min": [
                365
            ],
            "stddev": [
                376
            ],
            "stddev_pop": [
                378
            ],
            "stddev_samp": [
                380
            ],
            "sum": [
                384
            ],
            "var_pop": [
                388
            ],
            "var_samp": [
                390
            ],
            "variance": [
                392
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                361
            ],
            "on_conflict": [
                368
            ],
            "__typename": [
                5
            ]
        },
        "orders_avg_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_avg_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                358
            ],
            "_not": [
                358
            ],
            "_or": [
                358
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                860
            ],
            "cancel_tx_sig": [
                6
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "make": [
                267
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                860
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
            ],
            "side": [
                6
            ],
            "take": [
                824
            ],
            "transaction": [
                1062
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                860
            ],
            "user": [
                1235
            ],
            "__typename": [
                5
            ]
        },
        "orders_constraint": {},
        "orders_inc_input": {
            "cancel_block": [
                7
            ],
            "filled_base_amount": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "orders_insert_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "make": [
                276
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "take": [
                833
            ],
            "transaction": [
                1069
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "user": [
                1241
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_fields": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_fields": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                361
            ],
            "on_conflict": [
                368
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                359
            ],
            "update_columns": [
                385
            ],
            "where": [
                358
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "is_active": [
                346
            ],
            "make": [
                278
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "take": [
                835
            ],
            "transaction": [
                1071
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "user": [
                1243
            ],
            "__typename": [
                5
            ]
        },
        "orders_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "orders_select_column": {},
        "orders_select_column_orders_aggregate_bool_exp_bool_and_arguments_columns": {},
        "orders_select_column_orders_aggregate_bool_exp_bool_or_arguments_columns": {},
        "orders_set_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_pop_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_pop_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_samp_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_samp_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                382
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_value_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                859
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "orders_sum_fields": {
            "cancel_block": [
                7
            ],
            "filled_base_amount": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "orders_sum_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                360
            ],
            "_set": [
                374
            ],
            "where": [
                358
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_pop_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_pop_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_samp_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_samp_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_variance_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_variance_order_by": {
            "cancel_block": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate": {
            "aggregate": [
                397
            ],
            "nodes": [
                393
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp": {
            "count": [
                396
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp_count": {
            "arguments": [
                440
            ],
            "distinct": [
                0
            ],
            "filter": [
                402
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_fields": {
            "avg": [
                400
            ],
            "count": [
                3,
                {
                    "columns": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                432
            ],
            "min": [
                434
            ],
            "stddev": [
                442
            ],
            "stddev_pop": [
                444
            ],
            "stddev_samp": [
                446
            ],
            "sum": [
                450
            ],
            "var_pop": [
                454
            ],
            "var_samp": [
                456
            ],
            "variance": [
                458
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_order_by": {
            "avg": [
                401
            ],
            "count": [
                346
            ],
            "max": [
                433
            ],
            "min": [
                435
            ],
            "stddev": [
                443
            ],
            "stddev_pop": [
                445
            ],
            "stddev_samp": [
                447
            ],
            "sum": [
                451
            ],
            "var_pop": [
                455
            ],
            "var_samp": [
                457
            ],
            "variance": [
                459
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                431
            ],
            "on_conflict": [
                437
            ],
            "__typename": [
                5
            ]
        },
        "prices_avg_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_avg_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_bool_exp": {
            "_and": [
                402
            ],
            "_not": [
                402
            ],
            "_or": [
                402
            ],
            "base_amount": [
                8
            ],
            "created_at": [
                860
            ],
            "created_by": [
                6
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "price": [
                345
            ],
            "prices_type": [
                6
            ],
            "quote_amount": [
                8
            ],
            "updated_slot": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate": {
            "aggregate": [
                405
            ],
            "nodes": [
                403
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate_fields": {
            "avg": [
                406
            ],
            "count": [
                3,
                {
                    "columns": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                411
            ],
            "min": [
                412
            ],
            "stddev": [
                418
            ],
            "stddev_pop": [
                419
            ],
            "stddev_samp": [
                420
            ],
            "sum": [
                423
            ],
            "var_pop": [
                426
            ],
            "var_samp": [
                427
            ],
            "variance": [
                428
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_avg_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_bool_exp": {
            "_and": [
                407
            ],
            "_not": [
                407
            ],
            "_or": [
                407
            ],
            "base_amount": [
                8
            ],
            "interv": [
                860
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "price": [
                345
            ],
            "prices_type": [
                6
            ],
            "quote_amount": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_constraint": {},
        "prices_chart_data_inc_input": {
            "base_amount": [
                7
            ],
            "price": [
                344
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_insert_input": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_max_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_min_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                403
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_on_conflict": {
            "constraint": [
                408
            ],
            "update_columns": [
                424
            ],
            "where": [
                407
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_order_by": {
            "base_amount": [
                346
            ],
            "interv": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_select_column": {},
        "prices_chart_data_set_input": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stddev_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stream_cursor_input": {
            "initial_value": [
                422
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_sum_fields": {
            "base_amount": [
                7
            ],
            "price": [
                344
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_update_column": {},
        "prices_chart_data_updates": {
            "_inc": [
                409
            ],
            "_set": [
                417
            ],
            "where": [
                407
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_var_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_var_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_variance_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_constraint": {},
        "prices_inc_input": {
            "base_amount": [
                7
            ],
            "price": [
                344
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_insert_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_max_fields": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_max_order_by": {
            "base_amount": [
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_min_fields": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_min_order_by": {
            "base_amount": [
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                393
            ],
            "__typename": [
                5
            ]
        },
        "prices_on_conflict": {
            "constraint": [
                429
            ],
            "update_columns": [
                452
            ],
            "where": [
                402
            ],
            "__typename": [
                5
            ]
        },
        "prices_order_by": {
            "base_amount": [
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_pk_columns_input": {
            "created_at": [
                859
            ],
            "market_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "prices_select_column": {},
        "prices_set_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_pop_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_samp_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_input": {
            "initial_value": [
                449
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                859
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_sum_fields": {
            "base_amount": [
                7
            ],
            "price": [
                344
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_sum_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_update_column": {},
        "prices_updates": {
            "_inc": [
                430
            ],
            "_set": [
                441
            ],
            "where": [
                402
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_pop_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_samp_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_variance_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_variance_order_by": {
            "base_amount": [
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "program": [
                519
            ],
            "programByConditionalVaultAcct": [
                519
            ],
            "programByMigratorAcct": [
                519
            ],
            "programByPricingModelAcct": [
                519
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate": {
            "aggregate": [
                474
            ],
            "nodes": [
                460
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                463
            ],
            "corr": [
                464
            ],
            "count": [
                466
            ],
            "covar_samp": [
                467
            ],
            "max": [
                469
            ],
            "min": [
                470
            ],
            "stddev_samp": [
                471
            ],
            "sum": [
                472
            ],
            "var_samp": [
                473
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                492
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr": {
            "arguments": [
                465
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr_arguments": {
            "X": [
                493
            ],
            "Y": [
                493
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                491
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp": {
            "arguments": [
                468
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                494
            ],
            "Y": [
                494
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                495
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_min": {
            "arguments": [
                496
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                497
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_sum": {
            "arguments": [
                498
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_var_samp": {
            "arguments": [
                499
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_fields": {
            "avg": [
                477
            ],
            "count": [
                3,
                {
                    "columns": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                483
            ],
            "min": [
                485
            ],
            "stddev": [
                501
            ],
            "stddev_pop": [
                503
            ],
            "stddev_samp": [
                505
            ],
            "sum": [
                509
            ],
            "var_pop": [
                513
            ],
            "var_samp": [
                515
            ],
            "variance": [
                517
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                478
            ],
            "count": [
                346
            ],
            "max": [
                484
            ],
            "min": [
                486
            ],
            "stddev": [
                502
            ],
            "stddev_pop": [
                504
            ],
            "stddev_samp": [
                506
            ],
            "sum": [
                510
            ],
            "var_pop": [
                514
            ],
            "var_samp": [
                516
            ],
            "variance": [
                518
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                482
            ],
            "on_conflict": [
                488
            ],
            "__typename": [
                5
            ]
        },
        "program_system_avg_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_avg_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                479
            ],
            "_not": [
                479
            ],
            "_or": [
                479
            ],
            "autocrat_acct": [
                6
            ],
            "conditional_vault_acct": [
                6
            ],
            "migrator_acct": [
                6
            ],
            "pricing_model_acct": [
                6
            ],
            "program": [
                523
            ],
            "programByConditionalVaultAcct": [
                523
            ],
            "programByMigratorAcct": [
                523
            ],
            "programByPricingModelAcct": [
                523
            ],
            "system_version": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_constraint": {},
        "program_system_inc_input": {
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_insert_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "program": [
                530
            ],
            "programByConditionalVaultAcct": [
                530
            ],
            "programByMigratorAcct": [
                530
            ],
            "programByPricingModelAcct": [
                530
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_fields": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_fields": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                460
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                480
            ],
            "update_columns": [
                511
            ],
            "where": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "program": [
                532
            ],
            "programByConditionalVaultAcct": [
                532
            ],
            "programByMigratorAcct": [
                532
            ],
            "programByPricingModelAcct": [
                532
            ],
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_pk_columns_input": {
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_select_column": {},
        "program_system_select_column_program_system_aggregate_bool_exp_avg_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_corr_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_covar_samp_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_max_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_min_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_stddev_samp_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_sum_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_var_samp_arguments_columns": {},
        "program_system_set_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_pop_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_pop_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_samp_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_samp_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
            "initial_value": [
                508
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_value_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_fields": {
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                481
            ],
            "_set": [
                500
            ],
            "where": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_pop_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_pop_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_samp_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_samp_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_variance_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_variance_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                859
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "deployed_at": [
                857
            ],
            "programSystemsByConditionalVaultAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_systems_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                521
            ],
            "nodes": [
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                522
            ],
            "count": [
                3,
                {
                    "columns": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                527
            ],
            "min": [
                528
            ],
            "stddev": [
                536
            ],
            "stddev_pop": [
                537
            ],
            "stddev_samp": [
                538
            ],
            "sum": [
                541
            ],
            "var_pop": [
                544
            ],
            "var_samp": [
                545
            ],
            "variance": [
                546
            ],
            "__typename": [
                5
            ]
        },
        "programs_avg_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_bool_exp": {
            "_and": [
                523
            ],
            "_not": [
                523
            ],
            "_or": [
                523
            ],
            "created_at": [
                860
            ],
            "daos": [
                164
            ],
            "daos_aggregate": [
                157
            ],
            "deployed_at": [
                858
            ],
            "programSystemsByConditionalVaultAcct": [
                479
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                462
            ],
            "programSystemsByMigratorAcct": [
                479
            ],
            "programSystemsByMigratorAcct_aggregate": [
                462
            ],
            "programSystemsByPricingModelAcct": [
                479
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                462
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                479
            ],
            "program_systems_aggregate": [
                462
            ],
            "version": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                859
            ],
            "daos": [
                161
            ],
            "deployed_at": [
                857
            ],
            "programSystemsByConditionalVaultAcct": [
                476
            ],
            "programSystemsByMigratorAcct": [
                476
            ],
            "programSystemsByPricingModelAcct": [
                476
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                476
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                859
            ],
            "deployed_at": [
                857
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                859
            ],
            "deployed_at": [
                857
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                526
            ],
            "on_conflict": [
                531
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                524
            ],
            "update_columns": [
                542
            ],
            "where": [
                523
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                346
            ],
            "daos_aggregate": [
                160
            ],
            "deployed_at": [
                346
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                475
            ],
            "programSystemsByMigratorAcct_aggregate": [
                475
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                475
            ],
            "program_acct": [
                346
            ],
            "program_name": [
                346
            ],
            "program_systems_aggregate": [
                475
            ],
            "version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "programs_pk_columns_input": {
            "program_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "programs_select_column": {},
        "programs_set_input": {
            "created_at": [
                859
            ],
            "deployed_at": [
                857
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_pop_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_samp_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_input": {
            "initial_value": [
                540
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "deployed_at": [
                857
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                525
            ],
            "_set": [
                535
            ],
            "where": [
                523
            ],
            "__typename": [
                5
            ]
        },
        "programs_var_pop_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_var_samp_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_variance_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                302
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                302
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate": {
            "aggregate": [
                549
            ],
            "nodes": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate_fields": {
            "avg": [
                550
            ],
            "count": [
                3,
                {
                    "columns": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                555
            ],
            "min": [
                556
            ],
            "stddev": [
                563
            ],
            "stddev_pop": [
                564
            ],
            "stddev_samp": [
                565
            ],
            "sum": [
                568
            ],
            "var_pop": [
                571
            ],
            "var_samp": [
                572
            ],
            "variance": [
                573
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_avg_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_bool_exp": {
            "_and": [
                551
            ],
            "_not": [
                551
            ],
            "_or": [
                551
            ],
            "bar_size": [
                252
            ],
            "bar_start_time": [
                860
            ],
            "fail_base_amount": [
                8
            ],
            "fail_market": [
                311
            ],
            "fail_market_acct": [
                6
            ],
            "fail_price": [
                345
            ],
            "fail_quote_amount": [
                8
            ],
            "pass_base_amount": [
                8
            ],
            "pass_market": [
                311
            ],
            "pass_market_acct": [
                6
            ],
            "pass_price": [
                345
            ],
            "pass_quote_amount": [
                8
            ],
            "proposal_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_constraint": {},
        "proposal_bars_inc_input": {
            "fail_base_amount": [
                7
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_insert_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                320
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                320
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_max_fields": {
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_min_fields": {
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_on_conflict": {
            "constraint": [
                552
            ],
            "update_columns": [
                569
            ],
            "where": [
                551
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_order_by": {
            "bar_size": [
                346
            ],
            "bar_start_time": [
                346
            ],
            "fail_base_amount": [
                346
            ],
            "fail_market": [
                322
            ],
            "fail_market_acct": [
                346
            ],
            "fail_price": [
                346
            ],
            "fail_quote_amount": [
                346
            ],
            "pass_base_amount": [
                346
            ],
            "pass_market": [
                322
            ],
            "pass_market_acct": [
                346
            ],
            "pass_price": [
                346
            ],
            "pass_quote_amount": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_pk_columns_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                859
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_select_column": {},
        "proposal_bars_set_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_pop_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_samp_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stream_cursor_input": {
            "initial_value": [
                567
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stream_cursor_value_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                859
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_sum_fields": {
            "fail_base_amount": [
                7
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_update_column": {},
        "proposal_bars_updates": {
            "_inc": [
                553
            ],
            "_set": [
                562
            ],
            "where": [
                551
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_var_pop_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_var_samp_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_variance_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                253,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate": {
            "aggregate": [
                578
            ],
            "nodes": [
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                577
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                600
            ],
            "distinct": [
                0
            ],
            "filter": [
                584
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_fields": {
            "avg": [
                582
            ],
            "count": [
                3,
                {
                    "columns": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                591
            ],
            "min": [
                593
            ],
            "stddev": [
                602
            ],
            "stddev_pop": [
                604
            ],
            "stddev_samp": [
                606
            ],
            "sum": [
                610
            ],
            "var_pop": [
                614
            ],
            "var_samp": [
                616
            ],
            "variance": [
                618
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                583
            ],
            "count": [
                346
            ],
            "max": [
                592
            ],
            "min": [
                594
            ],
            "stddev": [
                603
            ],
            "stddev_pop": [
                605
            ],
            "stddev_samp": [
                607
            ],
            "sum": [
                611
            ],
            "var_pop": [
                615
            ],
            "var_samp": [
                617
            ],
            "variance": [
                619
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_append_input": {
            "categories": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                590
            ],
            "on_conflict": [
                596
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_avg_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_avg_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                584
            ],
            "_not": [
                584
            ],
            "_or": [
                584
            ],
            "base_cond_vault_acct": [
                6
            ],
            "categories": [
                255
            ],
            "content": [
                6
            ],
            "description": [
                6
            ],
            "fail_market_acct": [
                6
            ],
            "pass_market_acct": [
                6
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "proposal_id": [
                8
            ],
            "proposer_acct": [
                6
            ],
            "quote_cond_vault_acct": [
                6
            ],
            "slug": [
                6
            ],
            "title": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_constraint": {},
        "proposal_details_delete_at_path_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_delete_elem_input": {
            "categories": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_delete_key_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_inc_input": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_insert_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                253
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_max_fields": {
            "base_cond_vault_acct": [
                5
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_max_order_by": {
            "base_cond_vault_acct": [
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_min_fields": {
            "base_cond_vault_acct": [
                5
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_min_order_by": {
            "base_cond_vault_acct": [
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                585
            ],
            "update_columns": [
                612
            ],
            "where": [
                584
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "base_cond_vault_acct": [
                346
            ],
            "categories": [
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_pk_columns_input": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_prepend_input": {
            "categories": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_select_column": {},
        "proposal_details_set_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                253
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_pop_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_pop_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_samp_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_samp_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                609
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_value_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                253
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_sum_fields": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_sum_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                580
            ],
            "_delete_at_path": [
                586
            ],
            "_delete_elem": [
                587
            ],
            "_delete_key": [
                588
            ],
            "_inc": [
                589
            ],
            "_prepend": [
                599
            ],
            "_set": [
                601
            ],
            "where": [
                584
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_pop_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_pop_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_samp_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_samp_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_variance_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_variance_order_by": {
            "proposal_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_statistics": {
            "proposal_acct": [
                5
            ],
            "trade_count": [
                344
            ],
            "user_count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_statistics_bool_exp_bool_exp": {
            "_and": [
                621
            ],
            "_not": [
                621
            ],
            "_or": [
                621
            ],
            "proposal_acct": [
                6
            ],
            "trade_count": [
                345
            ],
            "user_count": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "proposal_statistics_enum_name": {},
        "proposal_statistics_order_by": {
            "proposal_acct": [
                346
            ],
            "trade_count": [
                346
            ],
            "user_count": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
            ],
            "proposalTradeVolume": [
                642
            ],
            "proposalTradeVolumeFailMarket": [
                302
            ],
            "proposalTradeVolumePassMarket": [
                302
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate": {
            "aggregate": [
                626
            ],
            "nodes": [
                624
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate_fields": {
            "avg": [
                627
            ],
            "count": [
                3,
                {
                    "columns": [
                        632,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                629
            ],
            "min": [
                630
            ],
            "stddev": [
                633
            ],
            "stddev_pop": [
                634
            ],
            "stddev_samp": [
                635
            ],
            "sum": [
                638
            ],
            "var_pop": [
                639
            ],
            "var_samp": [
                640
            ],
            "variance": [
                641
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_avg_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_bool_exp": {
            "_and": [
                628
            ],
            "_not": [
                628
            ],
            "_or": [
                628
            ],
            "fail_market_acct": [
                6
            ],
            "fail_volume": [
                345
            ],
            "pass_market_acct": [
                6
            ],
            "pass_volume": [
                345
            ],
            "proposalTradeVolume": [
                661
            ],
            "proposalTradeVolumeFailMarket": [
                311
            ],
            "proposalTradeVolumePassMarket": [
                311
            ],
            "proposal_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_max_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_min_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_order_by": {
            "fail_market_acct": [
                346
            ],
            "fail_volume": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_volume": [
                346
            ],
            "proposalTradeVolume": [
                672
            ],
            "proposalTradeVolumeFailMarket": [
                322
            ],
            "proposalTradeVolumePassMarket": [
                322
            ],
            "proposal_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_select_column": {},
        "proposal_total_trade_volume_stddev_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stddev_pop_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stddev_samp_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stream_cursor_input": {
            "initial_value": [
                637
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stream_cursor_value_input": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_sum_fields": {
            "fail_volume": [
                344
            ],
            "pass_volume": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_var_pop_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_var_samp_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_variance_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "completed_at": [
                859
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "created_at": [
                859
            ],
            "dao": [
                155
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_details": [
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "reactions": [
                702,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_aggregate": [
                703,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "twaps": [
                1112,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_aggregate": [
                1113,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "updated_at": [
                859
            ],
            "user_performances": [
                1191,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performances_aggregate": [
                1192,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                656
            ],
            "nodes": [
                642
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                645
            ],
            "corr": [
                646
            ],
            "count": [
                648
            ],
            "covar_samp": [
                649
            ],
            "max": [
                651
            ],
            "min": [
                652
            ],
            "stddev_samp": [
                653
            ],
            "sum": [
                654
            ],
            "var_samp": [
                655
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                675
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr": {
            "arguments": [
                647
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr_arguments": {
            "X": [
                676
            ],
            "Y": [
                676
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                674
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp": {
            "arguments": [
                650
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                677
            ],
            "Y": [
                677
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                678
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_min": {
            "arguments": [
                679
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                680
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_sum": {
            "arguments": [
                681
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_var_samp": {
            "arguments": [
                682
            ],
            "distinct": [
                0
            ],
            "filter": [
                661
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                659
            ],
            "count": [
                3,
                {
                    "columns": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                665
            ],
            "min": [
                667
            ],
            "stddev": [
                684
            ],
            "stddev_pop": [
                686
            ],
            "stddev_samp": [
                688
            ],
            "sum": [
                692
            ],
            "var_pop": [
                696
            ],
            "var_samp": [
                698
            ],
            "variance": [
                700
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                660
            ],
            "count": [
                346
            ],
            "max": [
                666
            ],
            "min": [
                668
            ],
            "stddev": [
                685
            ],
            "stddev_pop": [
                687
            ],
            "stddev_samp": [
                689
            ],
            "sum": [
                693
            ],
            "var_pop": [
                697
            ],
            "var_samp": [
                699
            ],
            "variance": [
                701
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                664
            ],
            "on_conflict": [
                671
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                661
            ],
            "_not": [
                661
            ],
            "_or": [
                661
            ],
            "autocrat_version": [
                198
            ],
            "base_vault": [
                6
            ],
            "comments": [
                59
            ],
            "comments_aggregate": [
                52
            ],
            "completed_at": [
                860
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "created_at": [
                860
            ],
            "dao": [
                164
            ],
            "dao_acct": [
                6
            ],
            "description_url": [
                6
            ],
            "duration_in_slots": [
                8
            ],
            "end_slot": [
                8
            ],
            "ended_at": [
                860
            ],
            "fail_market_acct": [
                6
            ],
            "initial_slot": [
                8
            ],
            "markets": [
                311
            ],
            "markets_aggregate": [
                304
            ],
            "min_base_futarchic_liquidity": [
                8
            ],
            "min_quote_futarchic_liquidity": [
                8
            ],
            "pass_market_acct": [
                6
            ],
            "pass_threshold_bps": [
                8
            ],
            "pricing_model_fail_acct": [
                6
            ],
            "pricing_model_pass_acct": [
                6
            ],
            "proposal_acct": [
                6
            ],
            "proposal_details": [
                584
            ],
            "proposal_details_aggregate": [
                576
            ],
            "proposal_num": [
                8
            ],
            "proposer_acct": [
                6
            ],
            "quote_vault": [
                6
            ],
            "reactions": [
                711
            ],
            "reactions_aggregate": [
                704
            ],
            "status": [
                6
            ],
            "twap_initial_observation": [
                8
            ],
            "twap_max_observation_change_per_update": [
                8
            ],
            "twaps": [
                1121
            ],
            "twaps_aggregate": [
                1114
            ],
            "updated_at": [
                860
            ],
            "user_performances": [
                1200
            ],
            "user_performances_aggregate": [
                1193
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                197
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "proposal_num": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_insert_input": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "completed_at": [
                859
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "created_at": [
                859
            ],
            "dao": [
                173
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                308
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_details": [
                581
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "reactions": [
                708
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "twaps": [
                1118
            ],
            "updated_at": [
                859
            ],
            "user_performances": [
                1197
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "completed_at": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "completed_at": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                642
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                664
            ],
            "on_conflict": [
                671
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                662
            ],
            "update_columns": [
                694
            ],
            "where": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "comments_aggregate": [
                55
            ],
            "completed_at": [
                346
            ],
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
            ],
            "created_at": [
                346
            ],
            "dao": [
                175
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "markets_aggregate": [
                307
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_details_aggregate": [
                579
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "reactions_aggregate": [
                707
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "twaps_aggregate": [
                1117
            ],
            "updated_at": [
                346
            ],
            "user_performances_aggregate": [
                1196
            ],
            "__typename": [
                5
            ]
        },
        "proposals_pk_columns_input": {
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposals_select_column": {},
        "proposals_select_column_proposals_aggregate_bool_exp_avg_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_corr_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_covar_samp_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_max_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_min_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_stddev_samp_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_sum_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_var_samp_arguments_columns": {},
        "proposals_set_input": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                691
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_value_input": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                859
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                197
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "proposal_num": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                663
            ],
            "_set": [
                683
            ],
            "where": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions": {
            "comment": [
                50
            ],
            "comment_id": [
                7
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                706
            ],
            "nodes": [
                702
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                705
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                723
            ],
            "distinct": [
                0
            ],
            "filter": [
                711
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_fields": {
            "avg": [
                709
            ],
            "count": [
                3,
                {
                    "columns": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                715
            ],
            "min": [
                717
            ],
            "stddev": [
                725
            ],
            "stddev_pop": [
                727
            ],
            "stddev_samp": [
                729
            ],
            "sum": [
                733
            ],
            "var_pop": [
                737
            ],
            "var_samp": [
                739
            ],
            "variance": [
                741
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                710
            ],
            "count": [
                346
            ],
            "max": [
                716
            ],
            "min": [
                718
            ],
            "stddev": [
                726
            ],
            "stddev_pop": [
                728
            ],
            "stddev_samp": [
                730
            ],
            "sum": [
                734
            ],
            "var_pop": [
                738
            ],
            "var_samp": [
                740
            ],
            "variance": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                714
            ],
            "on_conflict": [
                720
            ],
            "__typename": [
                5
            ]
        },
        "reactions_avg_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_avg_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                711
            ],
            "_not": [
                711
            ],
            "_or": [
                711
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "reaction": [
                6
            ],
            "reaction_id": [
                1252
            ],
            "reactor_acct": [
                6
            ],
            "updated_at": [
                860
            ],
            "__typename": [
                5
            ]
        },
        "reactions_constraint": {},
        "reactions_inc_input": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "reactions_insert_input": {
            "comment": [
                68
            ],
            "comment_id": [
                7
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_fields": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_fields": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                702
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                712
            ],
            "update_columns": [
                735
            ],
            "where": [
                711
            ],
            "__typename": [
                5
            ]
        },
        "reactions_order_by": {
            "comment": [
                70
            ],
            "comment_id": [
                346
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_pk_columns_input": {
            "reaction_id": [
                1251
            ],
            "__typename": [
                5
            ]
        },
        "reactions_select_column": {},
        "reactions_set_input": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_pop_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_pop_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_samp_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_samp_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                732
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_value_input": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1251
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "reactions_sum_fields": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "reactions_sum_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                713
            ],
            "_set": [
                724
            ],
            "where": [
                711
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_pop_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_pop_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_samp_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_samp_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_variance_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_variance_order_by": {
            "comment_id": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user": [
                1232
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate": {
            "aggregate": [
                747
            ],
            "nodes": [
                743
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp": {
            "count": [
                746
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp_count": {
            "arguments": [
                761
            ],
            "distinct": [
                0
            ],
            "filter": [
                750
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                753
            ],
            "min": [
                755
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_order_by": {
            "count": [
                346
            ],
            "max": [
                754
            ],
            "min": [
                756
            ],
            "__typename": [
                5
            ]
        },
        "sessions_arr_rel_insert_input": {
            "data": [
                752
            ],
            "on_conflict": [
                758
            ],
            "__typename": [
                5
            ]
        },
        "sessions_bool_exp": {
            "_and": [
                750
            ],
            "_not": [
                750
            ],
            "_or": [
                750
            ],
            "created_at": [
                860
            ],
            "expires_at": [
                858
            ],
            "id": [
                1252
            ],
            "user": [
                1235
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "sessions_constraint": {},
        "sessions_insert_input": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user": [
                1241
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_max_fields": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_max_order_by": {
            "created_at": [
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_fields": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_order_by": {
            "created_at": [
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                743
            ],
            "__typename": [
                5
            ]
        },
        "sessions_on_conflict": {
            "constraint": [
                751
            ],
            "update_columns": [
                765
            ],
            "where": [
                750
            ],
            "__typename": [
                5
            ]
        },
        "sessions_order_by": {
            "created_at": [
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user": [
                1243
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions_pk_columns_input": {
            "id": [
                1251
            ],
            "__typename": [
                5
            ]
        },
        "sessions_select_column": {},
        "sessions_set_input": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_stream_cursor_input": {
            "initial_value": [
                764
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "sessions_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "expires_at": [
                857
            ],
            "id": [
                1251
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_update_column": {},
        "sessions_updates": {
            "_set": [
                762
            ],
            "where": [
                750
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_aggregate": {
            "aggregate": [
                769
            ],
            "nodes": [
                767
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        779,
                        "[signature_accounts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                773
            ],
            "min": [
                774
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_bool_exp": {
            "_and": [
                770
            ],
            "_not": [
                770
            ],
            "_or": [
                770
            ],
            "account": [
                6
            ],
            "inserted_at": [
                860
            ],
            "signature": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_constraint": {},
        "signature_accounts_insert_input": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_max_fields": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_min_fields": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                767
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_on_conflict": {
            "constraint": [
                771
            ],
            "update_columns": [
                783
            ],
            "where": [
                770
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_order_by": {
            "account": [
                346
            ],
            "inserted_at": [
                346
            ],
            "signature": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_pk_columns_input": {
            "account": [
                5
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_select_column": {},
        "signature_accounts_set_input": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_stream_cursor_input": {
            "initial_value": [
                782
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_stream_cursor_value_input": {
            "account": [
                5
            ],
            "inserted_at": [
                859
            ],
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signature_accounts_update_column": {},
        "signature_accounts_updates": {
            "_set": [
                780
            ],
            "where": [
                770
            ],
            "__typename": [
                5
            ]
        },
        "signatures": {
            "block_time": [
                859
            ],
            "did_err": [
                0
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "v0_4_merges": [
                1337,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_aggregate": [
                1338,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_splits": [
                1453,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_aggregate": [
                1454,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "signatures_aggregate": {
            "aggregate": [
                787
            ],
            "nodes": [
                785
            ],
            "__typename": [
                5
            ]
        },
        "signatures_aggregate_fields": {
            "avg": [
                788
            ],
            "count": [
                3,
                {
                    "columns": [
                        800,
                        "[signatures_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                793
            ],
            "min": [
                794
            ],
            "stddev": [
                802
            ],
            "stddev_pop": [
                803
            ],
            "stddev_samp": [
                804
            ],
            "sum": [
                807
            ],
            "var_pop": [
                810
            ],
            "var_samp": [
                811
            ],
            "variance": [
                812
            ],
            "__typename": [
                5
            ]
        },
        "signatures_avg_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_bool_exp": {
            "_and": [
                789
            ],
            "_not": [
                789
            ],
            "_or": [
                789
            ],
            "block_time": [
                860
            ],
            "did_err": [
                1
            ],
            "err": [
                6
            ],
            "inserted_at": [
                860
            ],
            "seq_num": [
                8
            ],
            "signature": [
                6
            ],
            "slot": [
                8
            ],
            "v0_4_merges": [
                1346
            ],
            "v0_4_merges_aggregate": [
                1339
            ],
            "v0_4_splits": [
                1462
            ],
            "v0_4_splits_aggregate": [
                1455
            ],
            "__typename": [
                5
            ]
        },
        "signatures_constraint": {},
        "signatures_inc_input": {
            "seq_num": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_insert_input": {
            "block_time": [
                859
            ],
            "did_err": [
                0
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "v0_4_merges": [
                1343
            ],
            "v0_4_splits": [
                1459
            ],
            "__typename": [
                5
            ]
        },
        "signatures_max_fields": {
            "block_time": [
                859
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_min_fields": {
            "block_time": [
                859
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                785
            ],
            "__typename": [
                5
            ]
        },
        "signatures_obj_rel_insert_input": {
            "data": [
                792
            ],
            "on_conflict": [
                797
            ],
            "__typename": [
                5
            ]
        },
        "signatures_on_conflict": {
            "constraint": [
                790
            ],
            "update_columns": [
                808
            ],
            "where": [
                789
            ],
            "__typename": [
                5
            ]
        },
        "signatures_order_by": {
            "block_time": [
                346
            ],
            "did_err": [
                346
            ],
            "err": [
                346
            ],
            "inserted_at": [
                346
            ],
            "seq_num": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "v0_4_merges_aggregate": [
                1342
            ],
            "v0_4_splits_aggregate": [
                1458
            ],
            "__typename": [
                5
            ]
        },
        "signatures_pk_columns_input": {
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "signatures_select_column": {},
        "signatures_set_input": {
            "block_time": [
                859
            ],
            "did_err": [
                0
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_stddev_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_stddev_pop_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_stddev_samp_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_stream_cursor_input": {
            "initial_value": [
                806
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "signatures_stream_cursor_value_input": {
            "block_time": [
                859
            ],
            "did_err": [
                0
            ],
            "err": [
                5
            ],
            "inserted_at": [
                859
            ],
            "seq_num": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_sum_fields": {
            "seq_num": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "signatures_update_column": {},
        "signatures_updates": {
            "_inc": [
                791
            ],
            "_set": [
                801
            ],
            "where": [
                789
            ],
            "__typename": [
                5
            ]
        },
        "signatures_var_pop_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_var_samp_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "signatures_variance_fields": {
            "seq_num": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                813
            ],
            "_gt": [
                813
            ],
            "_gte": [
                813
            ],
            "_in": [
                813
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                813
            ],
            "_lte": [
                813
            ],
            "_neq": [
                813
            ],
            "_nin": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "takes": {
            "base_amount": [
                7
            ],
            "make": [
                256
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "order": [
                347
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate": {
            "aggregate": [
                819
            ],
            "nodes": [
                815
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                818
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                837
            ],
            "distinct": [
                0
            ],
            "filter": [
                824
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_fields": {
            "avg": [
                822
            ],
            "count": [
                3,
                {
                    "columns": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                828
            ],
            "min": [
                830
            ],
            "stddev": [
                839
            ],
            "stddev_pop": [
                841
            ],
            "stddev_samp": [
                843
            ],
            "sum": [
                847
            ],
            "var_pop": [
                851
            ],
            "var_samp": [
                853
            ],
            "variance": [
                855
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                823
            ],
            "count": [
                346
            ],
            "max": [
                829
            ],
            "min": [
                831
            ],
            "stddev": [
                840
            ],
            "stddev_pop": [
                842
            ],
            "stddev_samp": [
                844
            ],
            "sum": [
                848
            ],
            "var_pop": [
                852
            ],
            "var_samp": [
                854
            ],
            "variance": [
                856
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                827
            ],
            "on_conflict": [
                834
            ],
            "__typename": [
                5
            ]
        },
        "takes_avg_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_avg_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                824
            ],
            "_not": [
                824
            ],
            "_or": [
                824
            ],
            "base_amount": [
                8
            ],
            "make": [
                267
            ],
            "maker_base_fee": [
                8
            ],
            "maker_order_tx_sig": [
                6
            ],
            "maker_quote_fee": [
                8
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "order": [
                358
            ],
            "order_block": [
                8
            ],
            "order_time": [
                860
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
            ],
            "taker_base_fee": [
                8
            ],
            "taker_quote_fee": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "takes_constraint": {},
        "takes_inc_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_quote_fee": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_insert_input": {
            "base_amount": [
                7
            ],
            "make": [
                276
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "order": [
                367
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_max_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_max_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_min_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_min_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                815
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                827
            ],
            "on_conflict": [
                834
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                825
            ],
            "update_columns": [
                849
            ],
            "where": [
                824
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                346
            ],
            "make": [
                278
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order": [
                369
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "takes_select_column": {},
        "takes_set_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_pop_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_samp_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                846
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                859
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_sum_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_quote_fee": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                344
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_sum_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                826
            ],
            "_set": [
                838
            ],
            "where": [
                824
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_pop_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_pop_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_samp_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_samp_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_variance_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_variance_order_by": {
            "base_amount": [
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                857
            ],
            "_gt": [
                857
            ],
            "_gte": [
                857
            ],
            "_in": [
                857
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                857
            ],
            "_lte": [
                857
            ],
            "_neq": [
                857
            ],
            "_nin": [
                857
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                859
            ],
            "_gt": [
                859
            ],
            "_gte": [
                859
            ],
            "_in": [
                859
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                859
            ],
            "_lte": [
                859
            ],
            "_neq": [
                859
            ],
            "_nin": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token": [
                946
            ],
            "tokenAcctByTokenAcct": [
                904
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1058
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate": {
            "aggregate": [
                865
            ],
            "nodes": [
                861
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp": {
            "count": [
                864
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp_count": {
            "arguments": [
                882
            ],
            "distinct": [
                0
            ],
            "filter": [
                870
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_fields": {
            "avg": [
                868
            ],
            "count": [
                3,
                {
                    "columns": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                874
            ],
            "min": [
                876
            ],
            "stddev": [
                884
            ],
            "stddev_pop": [
                886
            ],
            "stddev_samp": [
                888
            ],
            "sum": [
                892
            ],
            "var_pop": [
                896
            ],
            "var_samp": [
                898
            ],
            "variance": [
                900
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_order_by": {
            "avg": [
                869
            ],
            "count": [
                346
            ],
            "max": [
                875
            ],
            "min": [
                877
            ],
            "stddev": [
                885
            ],
            "stddev_pop": [
                887
            ],
            "stddev_samp": [
                889
            ],
            "sum": [
                893
            ],
            "var_pop": [
                897
            ],
            "var_samp": [
                899
            ],
            "variance": [
                901
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_arr_rel_insert_input": {
            "data": [
                873
            ],
            "on_conflict": [
                879
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_bool_exp": {
            "_and": [
                870
            ],
            "_not": [
                870
            ],
            "_or": [
                870
            ],
            "amount": [
                8
            ],
            "created_at": [
                860
            ],
            "delta": [
                8
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "slot": [
                8
            ],
            "token": [
                950
            ],
            "tokenAcctByTokenAcct": [
                913
            ],
            "token_acct": [
                6
            ],
            "transaction": [
                1062
            ],
            "tx_sig": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_constraint": {},
        "token_acct_balances_inc_input": {
            "amount": [
                7
            ],
            "delta": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_insert_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token": [
                957
            ],
            "tokenAcctByTokenAcct": [
                922
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1069
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_max_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_max_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct": [
                346
            ],
            "tx_sig": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_min_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_min_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct": [
                346
            ],
            "tx_sig": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                861
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_on_conflict": {
            "constraint": [
                871
            ],
            "update_columns": [
                894
            ],
            "where": [
                870
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token": [
                959
            ],
            "tokenAcctByTokenAcct": [
                924
            ],
            "token_acct": [
                346
            ],
            "transaction": [
                1071
            ],
            "tx_sig": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_pk_columns_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_select_column": {},
        "token_acct_balances_set_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_input": {
            "initial_value": [
                891
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_sum_fields": {
            "amount": [
                7
            ],
            "delta": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_sum_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_update_column": {},
        "token_acct_balances_updates": {
            "_inc": [
                872
            ],
            "_set": [
                883
            ],
            "where": [
                870
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_status": {},
        "token_acct_status_comparison_exp": {
            "_eq": [
                902
            ],
            "_gt": [
                902
            ],
            "_gte": [
                902
            ],
            "_in": [
                902
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                902
            ],
            "_lte": [
                902
            ],
            "_neq": [
                902
            ],
            "_nin": [
                902
            ],
            "__typename": [
                5
            ]
        },
        "token_accts": {
            "amount": [
                7
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token": [
                946
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                861,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                862,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "updated_at": [
                859
            ],
            "v0_4_conditional_vaults": [
                1295,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_aggregate": [
                1296,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                908
            ],
            "nodes": [
                904
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                907
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                926
            ],
            "distinct": [
                0
            ],
            "filter": [
                913
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_fields": {
            "avg": [
                911
            ],
            "count": [
                3,
                {
                    "columns": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                917
            ],
            "min": [
                919
            ],
            "stddev": [
                928
            ],
            "stddev_pop": [
                930
            ],
            "stddev_samp": [
                932
            ],
            "sum": [
                936
            ],
            "var_pop": [
                940
            ],
            "var_samp": [
                942
            ],
            "variance": [
                944
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                912
            ],
            "count": [
                346
            ],
            "max": [
                918
            ],
            "min": [
                920
            ],
            "stddev": [
                929
            ],
            "stddev_pop": [
                931
            ],
            "stddev_samp": [
                933
            ],
            "sum": [
                937
            ],
            "var_pop": [
                941
            ],
            "var_samp": [
                943
            ],
            "variance": [
                945
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                916
            ],
            "on_conflict": [
                923
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_avg_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_avg_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                913
            ],
            "_not": [
                913
            ],
            "_or": [
                913
            ],
            "amount": [
                8
            ],
            "markets": [
                311
            ],
            "marketsByBidsTokenAcct": [
                311
            ],
            "marketsByBidsTokenAcct_aggregate": [
                304
            ],
            "markets_aggregate": [
                304
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "status": [
                903
            ],
            "token": [
                950
            ],
            "token_acct": [
                6
            ],
            "token_acct_balances": [
                870
            ],
            "token_acct_balances_aggregate": [
                863
            ],
            "updated_at": [
                860
            ],
            "v0_4_conditional_vaults": [
                1304
            ],
            "v0_4_conditional_vaults_aggregate": [
                1297
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_constraint": {},
        "token_accts_inc_input": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_insert_input": {
            "amount": [
                7
            ],
            "markets": [
                308
            ],
            "marketsByBidsTokenAcct": [
                308
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token": [
                957
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                867
            ],
            "updated_at": [
                859
            ],
            "v0_4_conditional_vaults": [
                1301
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_fields": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_fields": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                904
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                916
            ],
            "on_conflict": [
                923
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                914
            ],
            "update_columns": [
                938
            ],
            "where": [
                913
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                346
            ],
            "marketsByBidsTokenAcct_aggregate": [
                307
            ],
            "markets_aggregate": [
                307
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token": [
                959
            ],
            "token_acct": [
                346
            ],
            "token_acct_balances_aggregate": [
                866
            ],
            "updated_at": [
                346
            ],
            "v0_4_conditional_vaults_aggregate": [
                1300
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_pk_columns_input": {
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_select_column": {},
        "token_accts_set_input": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_pop_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_samp_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                935
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                902
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_sum_fields": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_sum_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                915
            ],
            "_set": [
                927
            ],
            "where": [
                913
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_pop_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_samp_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_variance_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_variance_order_by": {
            "amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "tokens": {
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daosByQuoteAcct": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daosByQuoteAcct_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "token_acct_balances": [
                861,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                862,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_accts": [
                904,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "token_accts_aggregate": [
                905,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "updated_at": [
                859
            ],
            "user_deposits": [
                1154,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1155,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "v04AmmsByLpMintAddr": [
                1253,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v04AmmsByLpMintAddr_aggregate": [
                1254,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v04AmmsByQuoteMintAddr": [
                1253,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v04AmmsByQuoteMintAddr_aggregate": [
                1254,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms": [
                1253,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms_aggregate": [
                1254,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_conditional_vaults": [
                1295,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_aggregate": [
                1296,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "vault_by_finalize": [
                92
            ],
            "vault_by_revert": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                948
            ],
            "nodes": [
                946
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                949
            ],
            "count": [
                3,
                {
                    "columns": [
                        961,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                954
            ],
            "min": [
                955
            ],
            "stddev": [
                963
            ],
            "stddev_pop": [
                964
            ],
            "stddev_samp": [
                965
            ],
            "sum": [
                968
            ],
            "var_pop": [
                971
            ],
            "var_samp": [
                972
            ],
            "variance": [
                973
            ],
            "__typename": [
                5
            ]
        },
        "tokens_avg_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_bool_exp": {
            "_and": [
                950
            ],
            "_not": [
                950
            ],
            "_or": [
                950
            ],
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "daos": [
                164
            ],
            "daosByQuoteAcct": [
                164
            ],
            "daosByQuoteAcct_aggregate": [
                157
            ],
            "daos_aggregate": [
                157
            ],
            "decimals": [
                814
            ],
            "image_url": [
                6
            ],
            "markets": [
                311
            ],
            "marketsByQuoteMintAcct": [
                311
            ],
            "marketsByQuoteMintAcct_aggregate": [
                304
            ],
            "markets_aggregate": [
                304
            ],
            "mint_acct": [
                6
            ],
            "name": [
                6
            ],
            "supply": [
                8
            ],
            "symbol": [
                6
            ],
            "token_acct_balances": [
                870
            ],
            "token_acct_balances_aggregate": [
                863
            ],
            "token_accts": [
                913
            ],
            "token_accts_aggregate": [
                906
            ],
            "updated_at": [
                860
            ],
            "user_deposits": [
                1163
            ],
            "user_deposits_aggregate": [
                1156
            ],
            "v04AmmsByLpMintAddr": [
                1262
            ],
            "v04AmmsByLpMintAddr_aggregate": [
                1255
            ],
            "v04AmmsByQuoteMintAddr": [
                1262
            ],
            "v04AmmsByQuoteMintAddr_aggregate": [
                1255
            ],
            "v0_4_amms": [
                1262
            ],
            "v0_4_amms_aggregate": [
                1255
            ],
            "v0_4_conditional_vaults": [
                1304
            ],
            "v0_4_conditional_vaults_aggregate": [
                1297
            ],
            "vault_by_finalize": [
                99
            ],
            "vault_by_revert": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                813
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_insert_input": {
            "conditional_vaults": [
                98
            ],
            "daos": [
                161
            ],
            "daosByQuoteAcct": [
                161
            ],
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "markets": [
                308
            ],
            "marketsByQuoteMintAcct": [
                308
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "token_acct_balances": [
                867
            ],
            "token_accts": [
                910
            ],
            "updated_at": [
                859
            ],
            "user_deposits": [
                1160
            ],
            "v04AmmsByLpMintAddr": [
                1259
            ],
            "v04AmmsByQuoteMintAddr": [
                1259
            ],
            "v0_4_amms": [
                1259
            ],
            "v0_4_conditional_vaults": [
                1301
            ],
            "vault_by_finalize": [
                107
            ],
            "vault_by_revert": [
                107
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "tokens_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                946
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                953
            ],
            "on_conflict": [
                958
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                951
            ],
            "update_columns": [
                969
            ],
            "where": [
                950
            ],
            "__typename": [
                5
            ]
        },
        "tokens_order_by": {
            "conditional_vaults_aggregate": [
                97
            ],
            "daosByQuoteAcct_aggregate": [
                160
            ],
            "daos_aggregate": [
                160
            ],
            "decimals": [
                346
            ],
            "image_url": [
                346
            ],
            "marketsByQuoteMintAcct_aggregate": [
                307
            ],
            "markets_aggregate": [
                307
            ],
            "mint_acct": [
                346
            ],
            "name": [
                346
            ],
            "supply": [
                346
            ],
            "symbol": [
                346
            ],
            "token_acct_balances_aggregate": [
                866
            ],
            "token_accts_aggregate": [
                909
            ],
            "updated_at": [
                346
            ],
            "user_deposits_aggregate": [
                1159
            ],
            "v04AmmsByLpMintAddr_aggregate": [
                1258
            ],
            "v04AmmsByQuoteMintAddr_aggregate": [
                1258
            ],
            "v0_4_amms_aggregate": [
                1258
            ],
            "v0_4_conditional_vaults_aggregate": [
                1300
            ],
            "vault_by_finalize": [
                109
            ],
            "vault_by_revert": [
                109
            ],
            "__typename": [
                5
            ]
        },
        "tokens_pk_columns_input": {
            "mint_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "tokens_select_column": {},
        "tokens_set_input": {
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_pop_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_samp_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_input": {
            "initial_value": [
                967
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_value_input": {
            "decimals": [
                813
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                813
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_update_column": {},
        "tokens_updates": {
            "_inc": [
                952
            ],
            "_set": [
                962
            ],
            "where": [
                950
            ],
            "__typename": [
                5
            ]
        },
        "tokens_var_pop_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_var_samp_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_variance_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "top_dao_traders_arguments": {
            "dao_slug": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions": {
            "slot": [
                7
            ],
            "transaction": [
                1058
            ],
            "transaction_watcher": [
                1016
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate": {
            "aggregate": [
                979
            ],
            "nodes": [
                975
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                978
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                996
            ],
            "distinct": [
                0
            ],
            "filter": [
                984
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_fields": {
            "avg": [
                982
            ],
            "count": [
                3,
                {
                    "columns": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                988
            ],
            "min": [
                990
            ],
            "stddev": [
                998
            ],
            "stddev_pop": [
                1000
            ],
            "stddev_samp": [
                1002
            ],
            "sum": [
                1006
            ],
            "var_pop": [
                1010
            ],
            "var_samp": [
                1012
            ],
            "variance": [
                1014
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                983
            ],
            "count": [
                346
            ],
            "max": [
                989
            ],
            "min": [
                991
            ],
            "stddev": [
                999
            ],
            "stddev_pop": [
                1001
            ],
            "stddev_samp": [
                1003
            ],
            "sum": [
                1007
            ],
            "var_pop": [
                1011
            ],
            "var_samp": [
                1013
            ],
            "variance": [
                1015
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                987
            ],
            "on_conflict": [
                993
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_avg_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_avg_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                984
            ],
            "_not": [
                984
            ],
            "_or": [
                984
            ],
            "slot": [
                8
            ],
            "transaction": [
                1062
            ],
            "transaction_watcher": [
                1025
            ],
            "tx_sig": [
                6
            ],
            "watcher_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_constraint": {},
        "transaction_watcher_transactions_inc_input": {
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_insert_input": {
            "slot": [
                7
            ],
            "transaction": [
                1069
            ],
            "transaction_watcher": [
                1034
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_max_fields": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_max_order_by": {
            "slot": [
                346
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_min_fields": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_min_order_by": {
            "slot": [
                346
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                975
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                985
            ],
            "update_columns": [
                1008
            ],
            "where": [
                984
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                346
            ],
            "transaction": [
                1071
            ],
            "transaction_watcher": [
                1036
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_pk_columns_input": {
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_select_column": {},
        "transaction_watcher_transactions_set_input": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_pop_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_pop_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_samp_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_samp_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                1005
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_value_input": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_sum_fields": {
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_sum_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                986
            ],
            "_set": [
                997
            ],
            "where": [
                984
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_pop_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_pop_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_samp_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_samp_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_variance_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_variance_order_by": {
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "transaction": [
                1058
            ],
            "transactionByLatestTxSig": [
                1058
            ],
            "transaction_watcher_transactions": [
                975,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                976,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                1020
            ],
            "nodes": [
                1016
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                1019
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                1038
            ],
            "distinct": [
                0
            ],
            "filter": [
                1025
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_fields": {
            "avg": [
                1023
            ],
            "count": [
                3,
                {
                    "columns": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1029
            ],
            "min": [
                1031
            ],
            "stddev": [
                1040
            ],
            "stddev_pop": [
                1042
            ],
            "stddev_samp": [
                1044
            ],
            "sum": [
                1048
            ],
            "var_pop": [
                1052
            ],
            "var_samp": [
                1054
            ],
            "variance": [
                1056
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                1024
            ],
            "count": [
                346
            ],
            "max": [
                1030
            ],
            "min": [
                1032
            ],
            "stddev": [
                1041
            ],
            "stddev_pop": [
                1043
            ],
            "stddev_samp": [
                1045
            ],
            "sum": [
                1049
            ],
            "var_pop": [
                1053
            ],
            "var_samp": [
                1055
            ],
            "variance": [
                1057
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                1028
            ],
            "on_conflict": [
                1035
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_avg_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_avg_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                1025
            ],
            "_not": [
                1025
            ],
            "_or": [
                1025
            ],
            "acct": [
                6
            ],
            "checked_up_to_slot": [
                8
            ],
            "description": [
                6
            ],
            "failure_log": [
                6
            ],
            "first_tx_sig": [
                6
            ],
            "latest_tx_sig": [
                6
            ],
            "serializer_logic_version": [
                814
            ],
            "status": [
                6
            ],
            "transaction": [
                1062
            ],
            "transactionByLatestTxSig": [
                1062
            ],
            "transaction_watcher_transactions": [
                984
            ],
            "transaction_watcher_transactions_aggregate": [
                977
            ],
            "updated_at": [
                860
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_constraint": {},
        "transaction_watchers_inc_input": {
            "checked_up_to_slot": [
                7
            ],
            "serializer_logic_version": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_insert_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "transaction": [
                1069
            ],
            "transactionByLatestTxSig": [
                1069
            ],
            "transaction_watcher_transactions": [
                981
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_fields": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_fields": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1016
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                1028
            ],
            "on_conflict": [
                1035
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                1026
            ],
            "update_columns": [
                1050
            ],
            "where": [
                1025
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "transaction": [
                1071
            ],
            "transactionByLatestTxSig": [
                1071
            ],
            "transaction_watcher_transactions_aggregate": [
                980
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_pk_columns_input": {
            "acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_select_column": {},
        "transaction_watchers_set_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_pop_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_pop_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_samp_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_samp_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                1047
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_value_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "status": [
                5
            ],
            "updated_at": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_fields": {
            "checked_up_to_slot": [
                7
            ],
            "serializer_logic_version": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                1027
            ],
            "_set": [
                1039
            ],
            "where": [
                1025
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_pop_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_pop_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_samp_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_samp_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_variance_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_variance_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                859
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "main_ix_type": [
                5
            ],
            "order": [
                347
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                861,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                862,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig": [
                1016,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                1017,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                975,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                976,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watchers": [
                1016,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                1017,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "tx_sig": [
                5
            ],
            "user_deposits": [
                1154,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1155,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate": {
            "aggregate": [
                1060
            ],
            "nodes": [
                1058
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                1061
            ],
            "count": [
                3,
                {
                    "columns": [
                        1073,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1066
            ],
            "min": [
                1067
            ],
            "stddev": [
                1075
            ],
            "stddev_pop": [
                1076
            ],
            "stddev_samp": [
                1077
            ],
            "sum": [
                1080
            ],
            "var_pop": [
                1083
            ],
            "var_samp": [
                1084
            ],
            "variance": [
                1085
            ],
            "__typename": [
                5
            ]
        },
        "transactions_avg_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_bool_exp": {
            "_and": [
                1062
            ],
            "_not": [
                1062
            ],
            "_or": [
                1062
            ],
            "block_time": [
                860
            ],
            "failed": [
                1
            ],
            "indexer_account_dependencies": [
                206
            ],
            "indexer_account_dependencies_aggregate": [
                201
            ],
            "main_ix_type": [
                6
            ],
            "order": [
                358
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                814
            ],
            "slot": [
                8
            ],
            "token_acct_balances": [
                870
            ],
            "token_acct_balances_aggregate": [
                863
            ],
            "transactionWatchersByLatestTxSig": [
                1025
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                1018
            ],
            "transaction_watcher_transactions": [
                984
            ],
            "transaction_watcher_transactions_aggregate": [
                977
            ],
            "transaction_watchers": [
                1025
            ],
            "transaction_watchers_aggregate": [
                1018
            ],
            "tx_sig": [
                6
            ],
            "user_deposits": [
                1163
            ],
            "user_deposits_aggregate": [
                1156
            ],
            "__typename": [
                5
            ]
        },
        "transactions_constraint": {},
        "transactions_inc_input": {
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transactions_insert_input": {
            "block_time": [
                859
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                205
            ],
            "main_ix_type": [
                5
            ],
            "order": [
                367
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                867
            ],
            "transactionWatchersByLatestTxSig": [
                1022
            ],
            "transaction_watcher_transactions": [
                981
            ],
            "transaction_watchers": [
                1022
            ],
            "tx_sig": [
                5
            ],
            "user_deposits": [
                1160
            ],
            "__typename": [
                5
            ]
        },
        "transactions_max_fields": {
            "block_time": [
                859
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_min_fields": {
            "block_time": [
                859
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1058
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                1065
            ],
            "on_conflict": [
                1070
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                1063
            ],
            "update_columns": [
                1081
            ],
            "where": [
                1062
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                346
            ],
            "failed": [
                346
            ],
            "indexer_account_dependencies_aggregate": [
                204
            ],
            "main_ix_type": [
                346
            ],
            "order": [
                369
            ],
            "payload": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct_balances_aggregate": [
                866
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                1021
            ],
            "transaction_watcher_transactions_aggregate": [
                980
            ],
            "transaction_watchers_aggregate": [
                1021
            ],
            "tx_sig": [
                346
            ],
            "user_deposits_aggregate": [
                1159
            ],
            "__typename": [
                5
            ]
        },
        "transactions_pk_columns_input": {
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_select_column": {},
        "transactions_set_input": {
            "block_time": [
                859
            ],
            "failed": [
                0
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_pop_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_samp_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_input": {
            "initial_value": [
                1079
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_value_input": {
            "block_time": [
                859
            ],
            "failed": [
                0
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_sum_fields": {
            "serializer_logic_version": [
                813
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transactions_update_column": {},
        "transactions_updates": {
            "_inc": [
                1064
            ],
            "_set": [
                1074
            ],
            "where": [
                1062
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_pop_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_samp_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_variance_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data": {
            "interv": [
                859
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate": {
            "aggregate": [
                1088
            ],
            "nodes": [
                1086
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate_fields": {
            "avg": [
                1089
            ],
            "count": [
                3,
                {
                    "columns": [
                        1099,
                        "[twap_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1094
            ],
            "min": [
                1095
            ],
            "stddev": [
                1101
            ],
            "stddev_pop": [
                1102
            ],
            "stddev_samp": [
                1103
            ],
            "sum": [
                1106
            ],
            "var_pop": [
                1109
            ],
            "var_samp": [
                1110
            ],
            "variance": [
                1111
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_avg_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_bool_exp": {
            "_and": [
                1090
            ],
            "_not": [
                1090
            ],
            "_or": [
                1090
            ],
            "interv": [
                860
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "token_amount": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_constraint": {},
        "twap_chart_data_inc_input": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_insert_input": {
            "interv": [
                859
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_max_fields": {
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_min_fields": {
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1086
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_on_conflict": {
            "constraint": [
                1091
            ],
            "update_columns": [
                1107
            ],
            "where": [
                1090
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_order_by": {
            "interv": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_select_column": {},
        "twap_chart_data_set_input": {
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stddev_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stddev_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stddev_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stream_cursor_input": {
            "initial_value": [
                1105
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stream_cursor_value_input": {
            "interv": [
                859
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_sum_fields": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_update_column": {},
        "twap_chart_data_updates": {
            "_inc": [
                1092
            ],
            "_set": [
                1100
            ],
            "where": [
                1090
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_var_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_var_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_variance_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate": {
            "aggregate": [
                1116
            ],
            "nodes": [
                1112
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                1115
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                1133
            ],
            "distinct": [
                0
            ],
            "filter": [
                1121
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_fields": {
            "avg": [
                1119
            ],
            "count": [
                3,
                {
                    "columns": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1125
            ],
            "min": [
                1127
            ],
            "stddev": [
                1135
            ],
            "stddev_pop": [
                1137
            ],
            "stddev_samp": [
                1139
            ],
            "sum": [
                1143
            ],
            "var_pop": [
                1147
            ],
            "var_samp": [
                1149
            ],
            "variance": [
                1151
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                1120
            ],
            "count": [
                346
            ],
            "max": [
                1126
            ],
            "min": [
                1128
            ],
            "stddev": [
                1136
            ],
            "stddev_pop": [
                1138
            ],
            "stddev_samp": [
                1140
            ],
            "sum": [
                1144
            ],
            "var_pop": [
                1148
            ],
            "var_samp": [
                1150
            ],
            "variance": [
                1152
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                1124
            ],
            "on_conflict": [
                1130
            ],
            "__typename": [
                5
            ]
        },
        "twaps_avg_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_avg_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                1121
            ],
            "_not": [
                1121
            ],
            "_or": [
                1121
            ],
            "created_at": [
                860
            ],
            "last_observation": [
                345
            ],
            "last_price": [
                345
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                345
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "token_amount": [
                8
            ],
            "updated_slot": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "twaps_constraint": {},
        "twaps_inc_input": {
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "observation_agg": [
                344
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_insert_input": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_max_fields": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_max_order_by": {
            "created_at": [
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_fields": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_order_by": {
            "created_at": [
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1112
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                1122
            ],
            "update_columns": [
                1145
            ],
            "where": [
                1121
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "created_at": [
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_pk_columns_input": {
            "market_acct": [
                5
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_select_column": {},
        "twaps_set_input": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_pop_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_pop_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_samp_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_samp_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                1142
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_sum_fields": {
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "observation_agg": [
                344
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_sum_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                1123
            ],
            "_set": [
                1134
            ],
            "where": [
                1121
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_pop_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_pop_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_samp_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_samp_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_variance_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_variance_order_by": {
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_count_and_trade_count_per_proposal_arguments": {
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token": [
                946
            ],
            "token_amount": [
                7
            ],
            "transaction": [
                1058
            ],
            "tx_sig": [
                5
            ],
            "user": [
                1232
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate": {
            "aggregate": [
                1158
            ],
            "nodes": [
                1154
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate_bool_exp": {
            "count": [
                1157
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate_bool_exp_count": {
            "arguments": [
                1172
            ],
            "distinct": [
                0
            ],
            "filter": [
                1163
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate_fields": {
            "avg": [
                1161
            ],
            "count": [
                3,
                {
                    "columns": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1166
            ],
            "min": [
                1168
            ],
            "stddev": [
                1174
            ],
            "stddev_pop": [
                1176
            ],
            "stddev_samp": [
                1178
            ],
            "sum": [
                1182
            ],
            "var_pop": [
                1185
            ],
            "var_samp": [
                1187
            ],
            "variance": [
                1189
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate_order_by": {
            "avg": [
                1162
            ],
            "count": [
                346
            ],
            "max": [
                1167
            ],
            "min": [
                1169
            ],
            "stddev": [
                1175
            ],
            "stddev_pop": [
                1177
            ],
            "stddev_samp": [
                1179
            ],
            "sum": [
                1183
            ],
            "var_pop": [
                1186
            ],
            "var_samp": [
                1188
            ],
            "variance": [
                1190
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_arr_rel_insert_input": {
            "data": [
                1165
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_avg_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_avg_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_bool_exp": {
            "_and": [
                1163
            ],
            "_not": [
                1163
            ],
            "_or": [
                1163
            ],
            "created_at": [
                860
            ],
            "mint_acct": [
                6
            ],
            "token": [
                950
            ],
            "token_amount": [
                8
            ],
            "transaction": [
                1062
            ],
            "tx_sig": [
                6
            ],
            "user": [
                1235
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_inc_input": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_insert_input": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token": [
                957
            ],
            "token_amount": [
                7
            ],
            "transaction": [
                1069
            ],
            "tx_sig": [
                5
            ],
            "user": [
                1241
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_max_fields": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_max_order_by": {
            "created_at": [
                346
            ],
            "mint_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "tx_sig": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_min_fields": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_min_order_by": {
            "created_at": [
                346
            ],
            "mint_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "tx_sig": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1154
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_order_by": {
            "created_at": [
                346
            ],
            "mint_acct": [
                346
            ],
            "token": [
                959
            ],
            "token_amount": [
                346
            ],
            "transaction": [
                1071
            ],
            "tx_sig": [
                346
            ],
            "user": [
                1243
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_select_column": {},
        "user_deposits_set_input": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_pop_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_samp_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stream_cursor_input": {
            "initial_value": [
                1181
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_sum_fields": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_sum_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_updates": {
            "_inc": [
                1164
            ],
            "_set": [
                1173
            ],
            "where": [
                1163
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_pop_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_samp_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_variance_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_variance_order_by": {
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao": [
                155
            ],
            "dao_acct": [
                5
            ],
            "proposal": [
                642
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "total_volume": [
                344
            ],
            "updated_at": [
                859
            ],
            "user": [
                1232
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate": {
            "aggregate": [
                1195
            ],
            "nodes": [
                1191
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp": {
            "count": [
                1194
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp_count": {
            "arguments": [
                1212
            ],
            "distinct": [
                0
            ],
            "filter": [
                1200
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_fields": {
            "avg": [
                1198
            ],
            "count": [
                3,
                {
                    "columns": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1204
            ],
            "min": [
                1206
            ],
            "stddev": [
                1214
            ],
            "stddev_pop": [
                1216
            ],
            "stddev_samp": [
                1218
            ],
            "sum": [
                1222
            ],
            "var_pop": [
                1226
            ],
            "var_samp": [
                1228
            ],
            "variance": [
                1230
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_order_by": {
            "avg": [
                1199
            ],
            "count": [
                346
            ],
            "max": [
                1205
            ],
            "min": [
                1207
            ],
            "stddev": [
                1215
            ],
            "stddev_pop": [
                1217
            ],
            "stddev_samp": [
                1219
            ],
            "sum": [
                1223
            ],
            "var_pop": [
                1227
            ],
            "var_samp": [
                1229
            ],
            "variance": [
                1231
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_arr_rel_insert_input": {
            "data": [
                1203
            ],
            "on_conflict": [
                1209
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_avg_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_avg_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_bool_exp": {
            "_and": [
                1200
            ],
            "_not": [
                1200
            ],
            "_or": [
                1200
            ],
            "buy_orders_count": [
                8
            ],
            "created_at": [
                860
            ],
            "dao": [
                164
            ],
            "dao_acct": [
                6
            ],
            "proposal": [
                661
            ],
            "proposal_acct": [
                6
            ],
            "sell_orders_count": [
                8
            ],
            "tokens_bought": [
                345
            ],
            "tokens_bought_resolving_market": [
                345
            ],
            "tokens_sold": [
                345
            ],
            "tokens_sold_resolving_market": [
                345
            ],
            "total_volume": [
                345
            ],
            "updated_at": [
                860
            ],
            "user": [
                1235
            ],
            "user_acct": [
                6
            ],
            "volume_bought": [
                345
            ],
            "volume_bought_resolving_market": [
                345
            ],
            "volume_sold": [
                345
            ],
            "volume_sold_resolving_market": [
                345
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_constraint": {},
        "user_performance_inc_input": {
            "buy_orders_count": [
                7
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_insert_input": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao": [
                173
            ],
            "dao_acct": [
                5
            ],
            "proposal": [
                670
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "updated_at": [
                859
            ],
            "user": [
                1241
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_max_fields": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "total_volume": [
                344
            ],
            "updated_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_max_order_by": {
            "buy_orders_count": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "updated_at": [
                346
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_min_fields": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "total_volume": [
                344
            ],
            "updated_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_min_order_by": {
            "buy_orders_count": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "updated_at": [
                346
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1191
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_on_conflict": {
            "constraint": [
                1201
            ],
            "update_columns": [
                1224
            ],
            "where": [
                1200
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_order_by": {
            "buy_orders_count": [
                346
            ],
            "created_at": [
                346
            ],
            "dao": [
                175
            ],
            "dao_acct": [
                346
            ],
            "proposal": [
                672
            ],
            "proposal_acct": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "updated_at": [
                346
            ],
            "user": [
                1243
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_pk_columns_input": {
            "proposal_acct": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_select_column": {},
        "user_performance_set_input": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "updated_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_pop_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_pop_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_samp_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_samp_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stream_cursor_input": {
            "initial_value": [
                1221
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stream_cursor_value_input": {
            "buy_orders_count": [
                7
            ],
            "created_at": [
                859
            ],
            "dao_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "total_volume": [
                344
            ],
            "updated_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_sum_fields": {
            "buy_orders_count": [
                7
            ],
            "sell_orders_count": [
                7
            ],
            "tokens_bought": [
                344
            ],
            "tokens_bought_resolving_market": [
                344
            ],
            "tokens_sold": [
                344
            ],
            "tokens_sold_resolving_market": [
                344
            ],
            "total_volume": [
                344
            ],
            "volume_bought": [
                344
            ],
            "volume_bought_resolving_market": [
                344
            ],
            "volume_sold": [
                344
            ],
            "volume_sold_resolving_market": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_sum_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_update_column": {},
        "user_performance_updates": {
            "_inc": [
                1202
            ],
            "_set": [
                1213
            ],
            "where": [
                1200
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_pop_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_pop_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_samp_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_samp_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_variance_fields": {
            "buy_orders_count": [
                2
            ],
            "sell_orders_count": [
                2
            ],
            "tokens_bought": [
                2
            ],
            "tokens_bought_resolving_market": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "tokens_sold_resolving_market": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_bought_resolving_market": [
                2
            ],
            "volume_sold": [
                2
            ],
            "volume_sold_resolving_market": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_variance_order_by": {
            "buy_orders_count": [
                346
            ],
            "sell_orders_count": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_bought_resolving_market": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "tokens_sold_resolving_market": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_bought_resolving_market": [
                346
            ],
            "volume_sold": [
                346
            ],
            "volume_sold_resolving_market": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                859
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "sessions": [
                743,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "sessions_aggregate": [
                744,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "user_acct": [
                5
            ],
            "user_deposits": [
                1154,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1155,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_performances": [
                1191,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performances_aggregate": [
                1192,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate": {
            "aggregate": [
                1234
            ],
            "nodes": [
                1232
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        1245,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1238
            ],
            "min": [
                1239
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                1235
            ],
            "_not": [
                1235
            ],
            "_or": [
                1235
            ],
            "created_at": [
                860
            ],
            "orders": [
                358
            ],
            "orders_aggregate": [
                349
            ],
            "sessions": [
                750
            ],
            "sessions_aggregate": [
                745
            ],
            "user_acct": [
                6
            ],
            "user_deposits": [
                1163
            ],
            "user_deposits_aggregate": [
                1156
            ],
            "user_performances": [
                1200
            ],
            "user_performances_aggregate": [
                1193
            ],
            "__typename": [
                5
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                859
            ],
            "orders": [
                355
            ],
            "sessions": [
                749
            ],
            "user_acct": [
                5
            ],
            "user_deposits": [
                1160
            ],
            "user_performances": [
                1197
            ],
            "__typename": [
                5
            ]
        },
        "users_max_fields": {
            "created_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_min_fields": {
            "created_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1232
            ],
            "__typename": [
                5
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                1237
            ],
            "on_conflict": [
                1242
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                1236
            ],
            "update_columns": [
                1249
            ],
            "where": [
                1235
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                346
            ],
            "orders_aggregate": [
                354
            ],
            "sessions_aggregate": [
                748
            ],
            "user_acct": [
                346
            ],
            "user_deposits_aggregate": [
                1159
            ],
            "user_performances_aggregate": [
                1196
            ],
            "__typename": [
                5
            ]
        },
        "users_pk_columns_input": {
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_stream_cursor_input": {
            "initial_value": [
                1248
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "users_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_update_column": {},
        "users_updates": {
            "_set": [
                1246
            ],
            "where": [
                1235
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                1251
            ],
            "_gt": [
                1251
            ],
            "_gte": [
                1251
            ],
            "_in": [
                1251
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                1251
            ],
            "_lte": [
                1251
            ],
            "_neq": [
                1251
            ],
            "_nin": [
                1251
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "base_token": [
                946
            ],
            "created_at_slot": [
                7
            ],
            "decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "lp_token": [
                946
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "quote_token": [
                946
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_aggregate": {
            "aggregate": [
                1257
            ],
            "nodes": [
                1253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_aggregate_bool_exp": {
            "count": [
                1256
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_aggregate_bool_exp_count": {
            "arguments": [
                1275
            ],
            "distinct": [
                0
            ],
            "filter": [
                1262
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_aggregate_fields": {
            "avg": [
                1260
            ],
            "count": [
                3,
                {
                    "columns": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1266
            ],
            "min": [
                1268
            ],
            "stddev": [
                1277
            ],
            "stddev_pop": [
                1279
            ],
            "stddev_samp": [
                1281
            ],
            "sum": [
                1285
            ],
            "var_pop": [
                1289
            ],
            "var_samp": [
                1291
            ],
            "variance": [
                1293
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_aggregate_order_by": {
            "avg": [
                1261
            ],
            "count": [
                346
            ],
            "max": [
                1267
            ],
            "min": [
                1269
            ],
            "stddev": [
                1278
            ],
            "stddev_pop": [
                1280
            ],
            "stddev_samp": [
                1282
            ],
            "sum": [
                1286
            ],
            "var_pop": [
                1290
            ],
            "var_samp": [
                1292
            ],
            "variance": [
                1294
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_arr_rel_insert_input": {
            "data": [
                1265
            ],
            "on_conflict": [
                1272
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_avg_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_avg_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_bool_exp": {
            "_and": [
                1262
            ],
            "_not": [
                1262
            ],
            "_or": [
                1262
            ],
            "amm_addr": [
                6
            ],
            "base_mint_addr": [
                6
            ],
            "base_reserves": [
                8
            ],
            "base_token": [
                950
            ],
            "created_at_slot": [
                8
            ],
            "decisions": [
                1388
            ],
            "decisions_aggregate": [
                1381
            ],
            "inserted_at": [
                860
            ],
            "latest_amm_seq_num_applied": [
                8
            ],
            "lp_mint_addr": [
                6
            ],
            "lp_token": [
                950
            ],
            "quote_mint_addr": [
                6
            ],
            "quote_reserves": [
                8
            ],
            "quote_token": [
                950
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_constraint": {},
        "v0_4_amms_inc_input": {
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_insert_input": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "base_token": [
                957
            ],
            "created_at_slot": [
                7
            ],
            "decisions": [
                1385
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "lp_token": [
                957
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "quote_token": [
                957
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_max_fields": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_max_order_by": {
            "amm_addr": [
                346
            ],
            "base_mint_addr": [
                346
            ],
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "inserted_at": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "lp_mint_addr": [
                346
            ],
            "quote_mint_addr": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_min_fields": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_min_order_by": {
            "amm_addr": [
                346
            ],
            "base_mint_addr": [
                346
            ],
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "inserted_at": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "lp_mint_addr": [
                346
            ],
            "quote_mint_addr": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_obj_rel_insert_input": {
            "data": [
                1265
            ],
            "on_conflict": [
                1272
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_on_conflict": {
            "constraint": [
                1263
            ],
            "update_columns": [
                1287
            ],
            "where": [
                1262
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_order_by": {
            "amm_addr": [
                346
            ],
            "base_mint_addr": [
                346
            ],
            "base_reserves": [
                346
            ],
            "base_token": [
                959
            ],
            "created_at_slot": [
                346
            ],
            "decisions_aggregate": [
                1384
            ],
            "inserted_at": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "lp_mint_addr": [
                346
            ],
            "lp_token": [
                959
            ],
            "quote_mint_addr": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "quote_token": [
                959
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_pk_columns_input": {
            "amm_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_select_column": {},
        "v0_4_amms_set_input": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_pop_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_pop_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_samp_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stddev_samp_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stream_cursor_input": {
            "initial_value": [
                1284
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_stream_cursor_value_input": {
            "amm_addr": [
                5
            ],
            "base_mint_addr": [
                5
            ],
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "inserted_at": [
                859
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "lp_mint_addr": [
                5
            ],
            "quote_mint_addr": [
                5
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_sum_fields": {
            "base_reserves": [
                7
            ],
            "created_at_slot": [
                7
            ],
            "latest_amm_seq_num_applied": [
                7
            ],
            "quote_reserves": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_sum_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_update_column": {},
        "v0_4_amms_updates": {
            "_inc": [
                1264
            ],
            "_set": [
                1276
            ],
            "where": [
                1262
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_var_pop_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_var_pop_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_var_samp_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_var_samp_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_variance_fields": {
            "base_reserves": [
                2
            ],
            "created_at_slot": [
                2
            ],
            "latest_amm_seq_num_applied": [
                2
            ],
            "quote_reserves": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_amms_variance_order_by": {
            "base_reserves": [
                346
            ],
            "created_at_slot": [
                346
            ],
            "latest_amm_seq_num_applied": [
                346
            ],
            "quote_reserves": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "metric_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "metric_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "outcome_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "outcome_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "pda_bump": [
                813
            ],
            "question": [
                1420
            ],
            "question_addr": [
                5
            ],
            "token_acct": [
                904
            ],
            "underlying_mint": [
                946
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "v0_4_merges": [
                1337,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_aggregate": [
                1338,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_splits": [
                1453,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_aggregate": [
                1454,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_aggregate": {
            "aggregate": [
                1299
            ],
            "nodes": [
                1295
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_aggregate_bool_exp": {
            "count": [
                1298
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_aggregate_bool_exp_count": {
            "arguments": [
                1317
            ],
            "distinct": [
                0
            ],
            "filter": [
                1304
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_aggregate_fields": {
            "avg": [
                1302
            ],
            "count": [
                3,
                {
                    "columns": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1308
            ],
            "min": [
                1310
            ],
            "stddev": [
                1319
            ],
            "stddev_pop": [
                1321
            ],
            "stddev_samp": [
                1323
            ],
            "sum": [
                1327
            ],
            "var_pop": [
                1331
            ],
            "var_samp": [
                1333
            ],
            "variance": [
                1335
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_aggregate_order_by": {
            "avg": [
                1303
            ],
            "count": [
                346
            ],
            "max": [
                1309
            ],
            "min": [
                1311
            ],
            "stddev": [
                1320
            ],
            "stddev_pop": [
                1322
            ],
            "stddev_samp": [
                1324
            ],
            "sum": [
                1328
            ],
            "var_pop": [
                1332
            ],
            "var_samp": [
                1334
            ],
            "variance": [
                1336
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_arr_rel_insert_input": {
            "data": [
                1307
            ],
            "on_conflict": [
                1314
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_avg_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_avg_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_bool_exp": {
            "_and": [
                1304
            ],
            "_not": [
                1304
            ],
            "_or": [
                1304
            ],
            "conditional_vault_addr": [
                6
            ],
            "created_at": [
                860
            ],
            "latest_vault_seq_num_applied": [
                8
            ],
            "metric_decisions": [
                1388
            ],
            "metric_decisions_aggregate": [
                1381
            ],
            "outcome_decisions": [
                1388
            ],
            "outcome_decisions_aggregate": [
                1381
            ],
            "pda_bump": [
                814
            ],
            "question": [
                1425
            ],
            "question_addr": [
                6
            ],
            "token_acct": [
                913
            ],
            "underlying_mint": [
                950
            ],
            "underlying_mint_acct": [
                6
            ],
            "underlying_token_acct": [
                6
            ],
            "v0_4_merges": [
                1346
            ],
            "v0_4_merges_aggregate": [
                1339
            ],
            "v0_4_splits": [
                1462
            ],
            "v0_4_splits_aggregate": [
                1455
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_constraint": {},
        "v0_4_conditional_vaults_inc_input": {
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_insert_input": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "metric_decisions": [
                1385
            ],
            "outcome_decisions": [
                1385
            ],
            "pda_bump": [
                813
            ],
            "question": [
                1435
            ],
            "question_addr": [
                5
            ],
            "token_acct": [
                922
            ],
            "underlying_mint": [
                957
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "v0_4_merges": [
                1343
            ],
            "v0_4_splits": [
                1459
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_max_fields": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "question_addr": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_max_order_by": {
            "conditional_vault_addr": [
                346
            ],
            "created_at": [
                346
            ],
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "question_addr": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_min_fields": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "question_addr": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_min_order_by": {
            "conditional_vault_addr": [
                346
            ],
            "created_at": [
                346
            ],
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "question_addr": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1295
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_obj_rel_insert_input": {
            "data": [
                1307
            ],
            "on_conflict": [
                1314
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_on_conflict": {
            "constraint": [
                1305
            ],
            "update_columns": [
                1329
            ],
            "where": [
                1304
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_order_by": {
            "conditional_vault_addr": [
                346
            ],
            "created_at": [
                346
            ],
            "latest_vault_seq_num_applied": [
                346
            ],
            "metric_decisions_aggregate": [
                1384
            ],
            "outcome_decisions_aggregate": [
                1384
            ],
            "pda_bump": [
                346
            ],
            "question": [
                1437
            ],
            "question_addr": [
                346
            ],
            "token_acct": [
                924
            ],
            "underlying_mint": [
                959
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
            ],
            "v0_4_merges_aggregate": [
                1342
            ],
            "v0_4_splits_aggregate": [
                1458
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_pk_columns_input": {
            "conditional_vault_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_select_column": {},
        "v0_4_conditional_vaults_set_input": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "question_addr": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_pop_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_pop_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_samp_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stddev_samp_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stream_cursor_input": {
            "initial_value": [
                1326
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_stream_cursor_value_input": {
            "conditional_vault_addr": [
                5
            ],
            "created_at": [
                859
            ],
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "question_addr": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_sum_fields": {
            "latest_vault_seq_num_applied": [
                7
            ],
            "pda_bump": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_sum_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_update_column": {},
        "v0_4_conditional_vaults_updates": {
            "_inc": [
                1306
            ],
            "_set": [
                1318
            ],
            "where": [
                1304
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_var_pop_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_var_pop_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_var_samp_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_var_samp_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_variance_fields": {
            "latest_vault_seq_num_applied": [
                2
            ],
            "pda_bump": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_conditional_vaults_variance_order_by": {
            "latest_vault_seq_num_applied": [
                346
            ],
            "pda_bump": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "signatureBySignature": [
                785
            ],
            "slot": [
                7
            ],
            "v0_4_conditional_vault": [
                1295
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_aggregate": {
            "aggregate": [
                1341
            ],
            "nodes": [
                1337
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_aggregate_bool_exp": {
            "count": [
                1340
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_aggregate_bool_exp_count": {
            "arguments": [
                1359
            ],
            "distinct": [
                0
            ],
            "filter": [
                1346
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_aggregate_fields": {
            "avg": [
                1344
            ],
            "count": [
                3,
                {
                    "columns": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1350
            ],
            "min": [
                1352
            ],
            "stddev": [
                1361
            ],
            "stddev_pop": [
                1363
            ],
            "stddev_samp": [
                1365
            ],
            "sum": [
                1369
            ],
            "var_pop": [
                1373
            ],
            "var_samp": [
                1375
            ],
            "variance": [
                1377
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_aggregate_order_by": {
            "avg": [
                1345
            ],
            "count": [
                346
            ],
            "max": [
                1351
            ],
            "min": [
                1353
            ],
            "stddev": [
                1362
            ],
            "stddev_pop": [
                1364
            ],
            "stddev_samp": [
                1366
            ],
            "sum": [
                1370
            ],
            "var_pop": [
                1374
            ],
            "var_samp": [
                1376
            ],
            "variance": [
                1378
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_arr_rel_insert_input": {
            "data": [
                1349
            ],
            "on_conflict": [
                1356
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_avg_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_avg_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_bool_exp": {
            "_and": [
                1346
            ],
            "_not": [
                1346
            ],
            "_or": [
                1346
            ],
            "amount": [
                8
            ],
            "created_at": [
                860
            ],
            "signature": [
                6
            ],
            "signatureBySignature": [
                789
            ],
            "slot": [
                8
            ],
            "v0_4_conditional_vault": [
                1304
            ],
            "vault_addr": [
                6
            ],
            "vault_seq_num": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_constraint": {},
        "v0_4_merges_inc_input": {
            "amount": [
                7
            ],
            "slot": [
                7
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_insert_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "signatureBySignature": [
                796
            ],
            "slot": [
                7
            ],
            "v0_4_conditional_vault": [
                1313
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_max_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_max_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_min_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_min_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1337
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_obj_rel_insert_input": {
            "data": [
                1349
            ],
            "on_conflict": [
                1356
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_on_conflict": {
            "constraint": [
                1347
            ],
            "update_columns": [
                1371
            ],
            "where": [
                1346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "signatureBySignature": [
                798
            ],
            "slot": [
                346
            ],
            "v0_4_conditional_vault": [
                1315
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_pk_columns_input": {
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_select_column": {},
        "v0_4_merges_set_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_pop_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_pop_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_samp_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stddev_samp_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stream_cursor_input": {
            "initial_value": [
                1368
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_sum_fields": {
            "amount": [
                7
            ],
            "slot": [
                7
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_sum_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_update_column": {},
        "v0_4_merges_updates": {
            "_inc": [
                1348
            ],
            "_set": [
                1360
            ],
            "where": [
                1346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_var_pop_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_var_pop_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_var_samp_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_var_samp_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_variance_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_merges_variance_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions": {
            "amm": [
                1253
            ],
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_detail": [
                118
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question": [
                1420
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault": [
                1295
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question": [
                1420
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault": [
                1295
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_aggregate": {
            "aggregate": [
                1383
            ],
            "nodes": [
                1379
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_aggregate_bool_exp": {
            "count": [
                1382
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_aggregate_bool_exp_count": {
            "arguments": [
                1400
            ],
            "distinct": [
                0
            ],
            "filter": [
                1388
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_aggregate_fields": {
            "avg": [
                1386
            ],
            "count": [
                3,
                {
                    "columns": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1392
            ],
            "min": [
                1394
            ],
            "stddev": [
                1402
            ],
            "stddev_pop": [
                1404
            ],
            "stddev_samp": [
                1406
            ],
            "sum": [
                1410
            ],
            "var_pop": [
                1414
            ],
            "var_samp": [
                1416
            ],
            "variance": [
                1418
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_aggregate_order_by": {
            "avg": [
                1387
            ],
            "count": [
                346
            ],
            "max": [
                1393
            ],
            "min": [
                1395
            ],
            "stddev": [
                1403
            ],
            "stddev_pop": [
                1405
            ],
            "stddev_samp": [
                1407
            ],
            "sum": [
                1411
            ],
            "var_pop": [
                1415
            ],
            "var_samp": [
                1417
            ],
            "variance": [
                1419
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_arr_rel_insert_input": {
            "data": [
                1391
            ],
            "on_conflict": [
                1397
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_avg_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_avg_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_bool_exp": {
            "_and": [
                1388
            ],
            "_not": [
                1388
            ],
            "_or": [
                1388
            ],
            "amm": [
                1262
            ],
            "amm_addr": [
                6
            ],
            "committee_evaluation": [
                860
            ],
            "created_at": [
                860
            ],
            "dao_detail": [
                123
            ],
            "dao_id": [
                8
            ],
            "description": [
                6
            ],
            "grant_awarded": [
                860
            ],
            "id": [
                8
            ],
            "market_opened": [
                860
            ],
            "metric_question": [
                1425
            ],
            "metric_question_addr": [
                6
            ],
            "metric_vault": [
                1304
            ],
            "metric_vault_addr": [
                6
            ],
            "outcome_question": [
                1425
            ],
            "outcome_question_addr": [
                6
            ],
            "outcome_vault": [
                1304
            ],
            "outcome_vault_addr": [
                6
            ],
            "recipient": [
                6
            ],
            "score_max_value": [
                345
            ],
            "score_min_value": [
                345
            ],
            "score_term": [
                6
            ],
            "score_unit": [
                6
            ],
            "title": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_constraint": {},
        "v0_4_metric_decisions_inc_input": {
            "dao_id": [
                7
            ],
            "id": [
                7
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_insert_input": {
            "amm": [
                1271
            ],
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_detail": [
                133
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question": [
                1435
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault": [
                1313
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question": [
                1435
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault": [
                1313
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_max_fields": {
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_max_order_by": {
            "amm_addr": [
                346
            ],
            "committee_evaluation": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_id": [
                346
            ],
            "description": [
                346
            ],
            "grant_awarded": [
                346
            ],
            "id": [
                346
            ],
            "market_opened": [
                346
            ],
            "metric_question_addr": [
                346
            ],
            "metric_vault_addr": [
                346
            ],
            "outcome_question_addr": [
                346
            ],
            "outcome_vault_addr": [
                346
            ],
            "recipient": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "score_term": [
                346
            ],
            "score_unit": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_min_fields": {
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_min_order_by": {
            "amm_addr": [
                346
            ],
            "committee_evaluation": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_id": [
                346
            ],
            "description": [
                346
            ],
            "grant_awarded": [
                346
            ],
            "id": [
                346
            ],
            "market_opened": [
                346
            ],
            "metric_question_addr": [
                346
            ],
            "metric_vault_addr": [
                346
            ],
            "outcome_question_addr": [
                346
            ],
            "outcome_vault_addr": [
                346
            ],
            "recipient": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "score_term": [
                346
            ],
            "score_unit": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1379
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_on_conflict": {
            "constraint": [
                1389
            ],
            "update_columns": [
                1412
            ],
            "where": [
                1388
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_order_by": {
            "amm": [
                1273
            ],
            "amm_addr": [
                346
            ],
            "committee_evaluation": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_detail": [
                135
            ],
            "dao_id": [
                346
            ],
            "description": [
                346
            ],
            "grant_awarded": [
                346
            ],
            "id": [
                346
            ],
            "market_opened": [
                346
            ],
            "metric_question": [
                1437
            ],
            "metric_question_addr": [
                346
            ],
            "metric_vault": [
                1315
            ],
            "metric_vault_addr": [
                346
            ],
            "outcome_question": [
                1437
            ],
            "outcome_question_addr": [
                346
            ],
            "outcome_vault": [
                1315
            ],
            "outcome_vault_addr": [
                346
            ],
            "recipient": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "score_term": [
                346
            ],
            "score_unit": [
                346
            ],
            "title": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_pk_columns_input": {
            "id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_select_column": {},
        "v0_4_metric_decisions_set_input": {
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_pop_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stddev_samp_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stream_cursor_input": {
            "initial_value": [
                1409
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_stream_cursor_value_input": {
            "amm_addr": [
                5
            ],
            "committee_evaluation": [
                859
            ],
            "created_at": [
                859
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "grant_awarded": [
                859
            ],
            "id": [
                7
            ],
            "market_opened": [
                859
            ],
            "metric_question_addr": [
                5
            ],
            "metric_vault_addr": [
                5
            ],
            "outcome_question_addr": [
                5
            ],
            "outcome_vault_addr": [
                5
            ],
            "recipient": [
                5
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "score_term": [
                5
            ],
            "score_unit": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_sum_fields": {
            "dao_id": [
                7
            ],
            "id": [
                7
            ],
            "score_max_value": [
                344
            ],
            "score_min_value": [
                344
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_sum_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_update_column": {},
        "v0_4_metric_decisions_updates": {
            "_inc": [
                1390
            ],
            "_set": [
                1401
            ],
            "where": [
                1388
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_var_pop_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_var_pop_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_var_samp_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_var_samp_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_variance_fields": {
            "dao_id": [
                2
            ],
            "id": [
                2
            ],
            "score_max_value": [
                2
            ],
            "score_min_value": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_metric_decisions_variance_order_by": {
            "dao_id": [
                346
            ],
            "id": [
                346
            ],
            "score_max_value": [
                346
            ],
            "score_min_value": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions": {
            "created_at": [
                859
            ],
            "decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "is_resolved": [
                0
            ],
            "metric_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "metric_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "payout_numerators": [
                253,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "question_addr": [
                5
            ],
            "question_id": [
                253,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "question_vaults": [
                1295,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "question_vaults_aggregate": [
                1296,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_aggregate": {
            "aggregate": [
                1422
            ],
            "nodes": [
                1420
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_aggregate_fields": {
            "avg": [
                1424
            ],
            "count": [
                3,
                {
                    "columns": [
                        1440,
                        "[v0_4_questions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1432
            ],
            "min": [
                1433
            ],
            "stddev": [
                1442
            ],
            "stddev_pop": [
                1443
            ],
            "stddev_samp": [
                1444
            ],
            "sum": [
                1447
            ],
            "var_pop": [
                1450
            ],
            "var_samp": [
                1451
            ],
            "variance": [
                1452
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_append_input": {
            "payout_numerators": [
                253
            ],
            "question_id": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_avg_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_bool_exp": {
            "_and": [
                1425
            ],
            "_not": [
                1425
            ],
            "_or": [
                1425
            ],
            "created_at": [
                860
            ],
            "decisions": [
                1388
            ],
            "decisions_aggregate": [
                1381
            ],
            "is_resolved": [
                1
            ],
            "metric_decisions": [
                1388
            ],
            "metric_decisions_aggregate": [
                1381
            ],
            "num_outcomes": [
                814
            ],
            "oracle_addr": [
                6
            ],
            "payout_denominator": [
                8
            ],
            "payout_numerators": [
                255
            ],
            "question_addr": [
                6
            ],
            "question_id": [
                255
            ],
            "question_vaults": [
                1304
            ],
            "question_vaults_aggregate": [
                1297
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_constraint": {},
        "v0_4_questions_delete_at_path_input": {
            "payout_numerators": [
                5
            ],
            "question_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_delete_elem_input": {
            "payout_numerators": [
                3
            ],
            "question_id": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_delete_key_input": {
            "payout_numerators": [
                5
            ],
            "question_id": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_inc_input": {
            "num_outcomes": [
                813
            ],
            "payout_denominator": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_insert_input": {
            "created_at": [
                859
            ],
            "decisions": [
                1385
            ],
            "is_resolved": [
                0
            ],
            "metric_decisions": [
                1385
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "payout_numerators": [
                253
            ],
            "question_addr": [
                5
            ],
            "question_id": [
                253
            ],
            "question_vaults": [
                1301
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_max_fields": {
            "created_at": [
                859
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "question_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_min_fields": {
            "created_at": [
                859
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "question_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1420
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_obj_rel_insert_input": {
            "data": [
                1431
            ],
            "on_conflict": [
                1436
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_on_conflict": {
            "constraint": [
                1426
            ],
            "update_columns": [
                1448
            ],
            "where": [
                1425
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_order_by": {
            "created_at": [
                346
            ],
            "decisions_aggregate": [
                1384
            ],
            "is_resolved": [
                346
            ],
            "metric_decisions_aggregate": [
                1384
            ],
            "num_outcomes": [
                346
            ],
            "oracle_addr": [
                346
            ],
            "payout_denominator": [
                346
            ],
            "payout_numerators": [
                346
            ],
            "question_addr": [
                346
            ],
            "question_id": [
                346
            ],
            "question_vaults_aggregate": [
                1300
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_pk_columns_input": {
            "question_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_prepend_input": {
            "payout_numerators": [
                253
            ],
            "question_id": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_select_column": {},
        "v0_4_questions_set_input": {
            "created_at": [
                859
            ],
            "is_resolved": [
                0
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "payout_numerators": [
                253
            ],
            "question_addr": [
                5
            ],
            "question_id": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_stddev_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_stddev_pop_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_stddev_samp_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_stream_cursor_input": {
            "initial_value": [
                1446
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_stream_cursor_value_input": {
            "created_at": [
                859
            ],
            "is_resolved": [
                0
            ],
            "num_outcomes": [
                813
            ],
            "oracle_addr": [
                5
            ],
            "payout_denominator": [
                7
            ],
            "payout_numerators": [
                253
            ],
            "question_addr": [
                5
            ],
            "question_id": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_sum_fields": {
            "num_outcomes": [
                813
            ],
            "payout_denominator": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_update_column": {},
        "v0_4_questions_updates": {
            "_append": [
                1423
            ],
            "_delete_at_path": [
                1427
            ],
            "_delete_elem": [
                1428
            ],
            "_delete_key": [
                1429
            ],
            "_inc": [
                1430
            ],
            "_prepend": [
                1439
            ],
            "_set": [
                1441
            ],
            "where": [
                1425
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_var_pop_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_var_samp_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_questions_variance_fields": {
            "num_outcomes": [
                2
            ],
            "payout_denominator": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "signatureBySignature": [
                785
            ],
            "slot": [
                7
            ],
            "v0_4_conditional_vault": [
                1295
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_aggregate": {
            "aggregate": [
                1457
            ],
            "nodes": [
                1453
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_aggregate_bool_exp": {
            "count": [
                1456
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_aggregate_bool_exp_count": {
            "arguments": [
                1475
            ],
            "distinct": [
                0
            ],
            "filter": [
                1462
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_aggregate_fields": {
            "avg": [
                1460
            ],
            "count": [
                3,
                {
                    "columns": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1466
            ],
            "min": [
                1468
            ],
            "stddev": [
                1477
            ],
            "stddev_pop": [
                1479
            ],
            "stddev_samp": [
                1481
            ],
            "sum": [
                1485
            ],
            "var_pop": [
                1489
            ],
            "var_samp": [
                1491
            ],
            "variance": [
                1493
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_aggregate_order_by": {
            "avg": [
                1461
            ],
            "count": [
                346
            ],
            "max": [
                1467
            ],
            "min": [
                1469
            ],
            "stddev": [
                1478
            ],
            "stddev_pop": [
                1480
            ],
            "stddev_samp": [
                1482
            ],
            "sum": [
                1486
            ],
            "var_pop": [
                1490
            ],
            "var_samp": [
                1492
            ],
            "variance": [
                1494
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_arr_rel_insert_input": {
            "data": [
                1465
            ],
            "on_conflict": [
                1472
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_avg_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_avg_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_bool_exp": {
            "_and": [
                1462
            ],
            "_not": [
                1462
            ],
            "_or": [
                1462
            ],
            "amount": [
                8
            ],
            "created_at": [
                860
            ],
            "signature": [
                6
            ],
            "signatureBySignature": [
                789
            ],
            "slot": [
                8
            ],
            "v0_4_conditional_vault": [
                1304
            ],
            "vault_addr": [
                6
            ],
            "vault_seq_num": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_constraint": {},
        "v0_4_splits_inc_input": {
            "amount": [
                7
            ],
            "slot": [
                7
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_insert_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "signatureBySignature": [
                796
            ],
            "slot": [
                7
            ],
            "v0_4_conditional_vault": [
                1313
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_max_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_max_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_min_fields": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_min_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1453
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_obj_rel_insert_input": {
            "data": [
                1465
            ],
            "on_conflict": [
                1472
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_on_conflict": {
            "constraint": [
                1463
            ],
            "update_columns": [
                1487
            ],
            "where": [
                1462
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "signature": [
                346
            ],
            "signatureBySignature": [
                798
            ],
            "slot": [
                346
            ],
            "v0_4_conditional_vault": [
                1315
            ],
            "vault_addr": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_pk_columns_input": {
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_select_column": {},
        "v0_4_splits_set_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_pop_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_pop_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_samp_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stddev_samp_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stream_cursor_input": {
            "initial_value": [
                1484
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "created_at": [
                859
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "vault_addr": [
                5
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_sum_fields": {
            "amount": [
                7
            ],
            "slot": [
                7
            ],
            "vault_seq_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_sum_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_update_column": {},
        "v0_4_splits_updates": {
            "_inc": [
                1464
            ],
            "_set": [
                1476
            ],
            "where": [
                1462
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_var_pop_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_var_pop_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_var_samp_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_var_samp_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_variance_fields": {
            "amount": [
                2
            ],
            "slot": [
                2
            ],
            "vault_seq_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_splits_variance_order_by": {
            "amount": [
                346
            ],
            "slot": [
                346
            ],
            "vault_seq_num": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "v0_4_merges": [
                1337
            ],
            "v0_4_splits": [
                1453
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_aggregate": {
            "aggregate": [
                1497
            ],
            "nodes": [
                1495
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_aggregate_fields": {
            "avg": [
                1498
            ],
            "count": [
                3,
                {
                    "columns": [
                        1509,
                        "[v0_4_swaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1503
            ],
            "min": [
                1504
            ],
            "stddev": [
                1511
            ],
            "stddev_pop": [
                1512
            ],
            "stddev_samp": [
                1513
            ],
            "sum": [
                1516
            ],
            "var_pop": [
                1519
            ],
            "var_samp": [
                1520
            ],
            "variance": [
                1521
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_avg_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_bool_exp": {
            "_and": [
                1499
            ],
            "_not": [
                1499
            ],
            "_or": [
                1499
            ],
            "amm_addr": [
                6
            ],
            "amm_seq_num": [
                8
            ],
            "block_time": [
                860
            ],
            "created_at": [
                860
            ],
            "id": [
                8
            ],
            "input_amount": [
                8
            ],
            "output_amount": [
                8
            ],
            "signature": [
                6
            ],
            "slot": [
                8
            ],
            "swap_type": [
                6
            ],
            "user_addr": [
                6
            ],
            "v0_4_merges": [
                1346
            ],
            "v0_4_splits": [
                1462
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_constraint": {},
        "v0_4_swaps_inc_input": {
            "amm_seq_num": [
                7
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_insert_input": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "v0_4_merges": [
                1355
            ],
            "v0_4_splits": [
                1471
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_max_fields": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_min_fields": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1495
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_on_conflict": {
            "constraint": [
                1500
            ],
            "update_columns": [
                1517
            ],
            "where": [
                1499
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_order_by": {
            "amm_addr": [
                346
            ],
            "amm_seq_num": [
                346
            ],
            "block_time": [
                346
            ],
            "created_at": [
                346
            ],
            "id": [
                346
            ],
            "input_amount": [
                346
            ],
            "output_amount": [
                346
            ],
            "signature": [
                346
            ],
            "slot": [
                346
            ],
            "swap_type": [
                346
            ],
            "user_addr": [
                346
            ],
            "v0_4_merges": [
                1357
            ],
            "v0_4_splits": [
                1473
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_pk_columns_input": {
            "signature": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_select_column": {},
        "v0_4_swaps_set_input": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_stddev_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_stddev_pop_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_stddev_samp_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_stream_cursor_input": {
            "initial_value": [
                1515
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_stream_cursor_value_input": {
            "amm_addr": [
                5
            ],
            "amm_seq_num": [
                7
            ],
            "block_time": [
                859
            ],
            "created_at": [
                859
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "signature": [
                5
            ],
            "slot": [
                7
            ],
            "swap_type": [
                5
            ],
            "user_addr": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_sum_fields": {
            "amm_seq_num": [
                7
            ],
            "id": [
                7
            ],
            "input_amount": [
                7
            ],
            "output_amount": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_update_column": {},
        "v0_4_swaps_updates": {
            "_inc": [
                1501
            ],
            "_set": [
                1510
            ],
            "where": [
                1499
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_var_pop_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_var_samp_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "v0_4_swaps_variance_fields": {
            "amm_seq_num": [
                2
            ],
            "id": [
                2
            ],
            "input_amount": [
                2
            ],
            "output_amount": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        859,
                        "timestamptz!"
                    ]
                }
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "dao_details": [
                118,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                199,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers": [
                223,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_aggregate": [
                224,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_by_pk": [
                393,
                {
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                403,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                404,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "program_system": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                519,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_aggregate": [
                520,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars": [
                547,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                548,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        859,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                624,
                {
                    "distinct_on": [
                        632,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        631,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        628
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                625,
                {
                    "distinct_on": [
                        632,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        631,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        628
                    ]
                }
            ],
            "proposals": [
                642,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_aggregate": [
                643,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_by_pk": [
                642,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                702,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_aggregate": [
                703,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_by_pk": [
                702,
                {
                    "reaction_id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "sessions": [
                743,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "sessions_aggregate": [
                744,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "sessions_by_pk": [
                743,
                {
                    "id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "signature_accounts": [
                767,
                {
                    "distinct_on": [
                        779,
                        "[signature_accounts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        777,
                        "[signature_accounts_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "signature_accounts_aggregate": [
                768,
                {
                    "distinct_on": [
                        779,
                        "[signature_accounts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        777,
                        "[signature_accounts_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "signature_accounts_by_pk": [
                767,
                {
                    "account": [
                        5,
                        "String!"
                    ],
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "signatures": [
                785,
                {
                    "distinct_on": [
                        800,
                        "[signatures_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        798,
                        "[signatures_order_by!]"
                    ],
                    "where": [
                        789
                    ]
                }
            ],
            "signatures_aggregate": [
                786,
                {
                    "distinct_on": [
                        800,
                        "[signatures_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        798,
                        "[signatures_order_by!]"
                    ],
                    "where": [
                        789
                    ]
                }
            ],
            "signatures_by_pk": [
                785,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes": [
                815,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_aggregate": [
                816,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_by_pk": [
                815,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances": [
                861,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                862,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                861,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                904,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "token_accts_aggregate": [
                905,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "token_accts_by_pk": [
                904,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                946,
                {
                    "distinct_on": [
                        961,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        959,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        950
                    ]
                }
            ],
            "tokens_aggregate": [
                947,
                {
                    "distinct_on": [
                        961,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        959,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        950
                    ]
                }
            ],
            "tokens_by_pk": [
                946,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "top_dao_traders": [
                151,
                {
                    "args": [
                        974,
                        "top_dao_traders_arguments!"
                    ],
                    "distinct_on": [
                        153,
                        "[dao_trader_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        154,
                        "[dao_trader_order_by!]"
                    ],
                    "where": [
                        152
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                975,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                976,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                975,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers": [
                1016,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                1017,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                1016,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                1058,
                {
                    "distinct_on": [
                        1073,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1071,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1062
                    ]
                }
            ],
            "transactions_aggregate": [
                1059,
                {
                    "distinct_on": [
                        1073,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1071,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1062
                    ]
                }
            ],
            "transactions_by_pk": [
                1058,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twap_chart_data": [
                1086,
                {
                    "distinct_on": [
                        1099,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1098,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1090
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1087,
                {
                    "distinct_on": [
                        1099,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1098,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1090
                    ]
                }
            ],
            "twaps": [
                1112,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_aggregate": [
                1113,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_by_pk": [
                1112,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "user_count_and_trade_count_per_proposal": [
                620,
                {
                    "args": [
                        1153,
                        "user_count_and_trade_count_per_proposal_arguments!"
                    ],
                    "distinct_on": [
                        622,
                        "[proposal_statistics_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_statistics_order_by!]"
                    ],
                    "where": [
                        621
                    ]
                }
            ],
            "user_deposits": [
                1154,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1155,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_performance": [
                1191,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performance_aggregate": [
                1192,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performance_by_pk": [
                1191,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users": [
                1232,
                {
                    "distinct_on": [
                        1245,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1243,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1235
                    ]
                }
            ],
            "users_aggregate": [
                1233,
                {
                    "distinct_on": [
                        1245,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1243,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1235
                    ]
                }
            ],
            "users_by_pk": [
                1232,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_amms": [
                1253,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms_aggregate": [
                1254,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms_by_pk": [
                1253,
                {
                    "amm_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_conditional_vaults": [
                1295,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_aggregate": [
                1296,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_by_pk": [
                1295,
                {
                    "conditional_vault_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_merges": [
                1337,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_aggregate": [
                1338,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_by_pk": [
                1337,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_metric_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_metric_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_metric_decisions_by_pk": [
                1379,
                {
                    "id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_questions": [
                1420,
                {
                    "distinct_on": [
                        1440,
                        "[v0_4_questions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1437,
                        "[v0_4_questions_order_by!]"
                    ],
                    "where": [
                        1425
                    ]
                }
            ],
            "v0_4_questions_aggregate": [
                1421,
                {
                    "distinct_on": [
                        1440,
                        "[v0_4_questions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1437,
                        "[v0_4_questions_order_by!]"
                    ],
                    "where": [
                        1425
                    ]
                }
            ],
            "v0_4_questions_by_pk": [
                1420,
                {
                    "question_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_splits": [
                1453,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_aggregate": [
                1454,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_by_pk": [
                1453,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_swaps": [
                1495,
                {
                    "distinct_on": [
                        1509,
                        "[v0_4_swaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1507,
                        "[v0_4_swaps_order_by!]"
                    ],
                    "where": [
                        1499
                    ]
                }
            ],
            "v0_4_swaps_aggregate": [
                1496,
                {
                    "distinct_on": [
                        1509,
                        "[v0_4_swaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1507,
                        "[v0_4_swaps_order_by!]"
                    ],
                    "where": [
                        1499
                    ]
                }
            ],
            "v0_4_swaps_by_pk": [
                1495,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_candles": [
                26,
                {
                    "where": [
                        18,
                        "candles_bool_exp!"
                    ]
                }
            ],
            "delete_candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        859,
                        "timestamptz!"
                    ]
                }
            ],
            "delete_comments": [
                67,
                {
                    "where": [
                        59,
                        "comments_bool_exp!"
                    ]
                }
            ],
            "delete_comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_conditional_vaults": [
                106,
                {
                    "where": [
                        99,
                        "conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "delete_conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_dao_details": [
                132,
                {
                    "where": [
                        123,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "delete_dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_daos": [
                172,
                {
                    "where": [
                        164,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies": [
                213,
                {
                    "where": [
                        206,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies_by_pk": [
                199,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexers": [
                233,
                {
                    "where": [
                        227,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "delete_indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_makes": [
                275,
                {
                    "where": [
                        267,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                319,
                {
                    "where": [
                        311,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                366,
                {
                    "where": [
                        358,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices": [
                436,
                {
                    "where": [
                        402,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "delete_prices_by_pk": [
                393,
                {
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices_chart_data": [
                413,
                {
                    "where": [
                        407,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_program_system": [
                487,
                {
                    "where": [
                        479,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                529,
                {
                    "where": [
                        523,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_bars": [
                557,
                {
                    "where": [
                        551,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        859,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                595,
                {
                    "where": [
                        584,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                669,
                {
                    "where": [
                        661,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                642,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                719,
                {
                    "where": [
                        711,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                702,
                {
                    "reaction_id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "delete_sessions": [
                757,
                {
                    "where": [
                        750,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "delete_sessions_by_pk": [
                743,
                {
                    "id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "delete_signature_accounts": [
                775,
                {
                    "where": [
                        770,
                        "signature_accounts_bool_exp!"
                    ]
                }
            ],
            "delete_signature_accounts_by_pk": [
                767,
                {
                    "account": [
                        5,
                        "String!"
                    ],
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_signatures": [
                795,
                {
                    "where": [
                        789,
                        "signatures_bool_exp!"
                    ]
                }
            ],
            "delete_signatures_by_pk": [
                785,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_takes": [
                832,
                {
                    "where": [
                        824,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                815,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_acct_balances": [
                878,
                {
                    "where": [
                        870,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "delete_token_acct_balances_by_pk": [
                861,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                921,
                {
                    "where": [
                        913,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                904,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                956,
                {
                    "where": [
                        950,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                946,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                992,
                {
                    "where": [
                        984,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                975,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watchers": [
                1033,
                {
                    "where": [
                        1025,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                1016,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                1068,
                {
                    "where": [
                        1062,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                1058,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twap_chart_data": [
                1096,
                {
                    "where": [
                        1090,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_twaps": [
                1129,
                {
                    "where": [
                        1121,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                1112,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_user_deposits": [
                1170,
                {
                    "where": [
                        1163,
                        "user_deposits_bool_exp!"
                    ]
                }
            ],
            "delete_user_performance": [
                1208,
                {
                    "where": [
                        1200,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "delete_user_performance_by_pk": [
                1191,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_users": [
                1240,
                {
                    "where": [
                        1235,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                1232,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_v0_4_amms": [
                1270,
                {
                    "where": [
                        1262,
                        "v0_4_amms_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_amms_by_pk": [
                1253,
                {
                    "amm_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_v0_4_conditional_vaults": [
                1312,
                {
                    "where": [
                        1304,
                        "v0_4_conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_conditional_vaults_by_pk": [
                1295,
                {
                    "conditional_vault_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_v0_4_merges": [
                1354,
                {
                    "where": [
                        1346,
                        "v0_4_merges_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_merges_by_pk": [
                1337,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_v0_4_metric_decisions": [
                1396,
                {
                    "where": [
                        1388,
                        "v0_4_metric_decisions_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_metric_decisions_by_pk": [
                1379,
                {
                    "id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_v0_4_questions": [
                1434,
                {
                    "where": [
                        1425,
                        "v0_4_questions_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_questions_by_pk": [
                1420,
                {
                    "question_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_v0_4_splits": [
                1470,
                {
                    "where": [
                        1462,
                        "v0_4_splits_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_splits_by_pk": [
                1453,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_v0_4_swaps": [
                1505,
                {
                    "where": [
                        1499,
                        "v0_4_swaps_bool_exp!"
                    ]
                }
            ],
            "delete_v0_4_swaps_by_pk": [
                1495,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "insert_candles": [
                26,
                {
                    "objects": [
                        21,
                        "[candles_insert_input!]!"
                    ],
                    "on_conflict": [
                        27
                    ]
                }
            ],
            "insert_candles_one": [
                9,
                {
                    "object": [
                        21,
                        "candles_insert_input!"
                    ],
                    "on_conflict": [
                        27
                    ]
                }
            ],
            "insert_comments": [
                67,
                {
                    "objects": [
                        62,
                        "[comments_insert_input!]!"
                    ],
                    "on_conflict": [
                        69
                    ]
                }
            ],
            "insert_comments_one": [
                50,
                {
                    "object": [
                        62,
                        "comments_insert_input!"
                    ],
                    "on_conflict": [
                        69
                    ]
                }
            ],
            "insert_conditional_vaults": [
                106,
                {
                    "objects": [
                        101,
                        "[conditional_vaults_insert_input!]!"
                    ],
                    "on_conflict": [
                        108
                    ]
                }
            ],
            "insert_conditional_vaults_one": [
                92,
                {
                    "object": [
                        101,
                        "conditional_vaults_insert_input!"
                    ],
                    "on_conflict": [
                        108
                    ]
                }
            ],
            "insert_dao_details": [
                132,
                {
                    "objects": [
                        129,
                        "[dao_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_dao_details_one": [
                118,
                {
                    "object": [
                        129,
                        "dao_details_insert_input!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_daos": [
                172,
                {
                    "objects": [
                        167,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        174
                    ]
                }
            ],
            "insert_daos_one": [
                155,
                {
                    "object": [
                        167,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        174
                    ]
                }
            ],
            "insert_indexer_account_dependencies": [
                213,
                {
                    "objects": [
                        208,
                        "[indexer_account_dependencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        214
                    ]
                }
            ],
            "insert_indexer_account_dependencies_one": [
                199,
                {
                    "object": [
                        208,
                        "indexer_account_dependencies_insert_input!"
                    ],
                    "on_conflict": [
                        214
                    ]
                }
            ],
            "insert_indexers": [
                233,
                {
                    "objects": [
                        230,
                        "[indexers_insert_input!]!"
                    ],
                    "on_conflict": [
                        235
                    ]
                }
            ],
            "insert_indexers_one": [
                223,
                {
                    "object": [
                        230,
                        "indexers_insert_input!"
                    ],
                    "on_conflict": [
                        235
                    ]
                }
            ],
            "insert_makes": [
                275,
                {
                    "objects": [
                        270,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_makes_one": [
                256,
                {
                    "object": [
                        270,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_markets": [
                319,
                {
                    "objects": [
                        314,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        321
                    ]
                }
            ],
            "insert_markets_one": [
                302,
                {
                    "object": [
                        314,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        321
                    ]
                }
            ],
            "insert_orders": [
                366,
                {
                    "objects": [
                        361,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_orders_one": [
                347,
                {
                    "object": [
                        361,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_prices": [
                436,
                {
                    "objects": [
                        431,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        437
                    ]
                }
            ],
            "insert_prices_chart_data": [
                413,
                {
                    "objects": [
                        410,
                        "[prices_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        414
                    ]
                }
            ],
            "insert_prices_chart_data_one": [
                403,
                {
                    "object": [
                        410,
                        "prices_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        414
                    ]
                }
            ],
            "insert_prices_one": [
                393,
                {
                    "object": [
                        431,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        437
                    ]
                }
            ],
            "insert_program_system": [
                487,
                {
                    "objects": [
                        482,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        488
                    ]
                }
            ],
            "insert_program_system_one": [
                460,
                {
                    "object": [
                        482,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        488
                    ]
                }
            ],
            "insert_programs": [
                529,
                {
                    "objects": [
                        526,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        531
                    ]
                }
            ],
            "insert_programs_one": [
                519,
                {
                    "object": [
                        526,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        531
                    ]
                }
            ],
            "insert_proposal_bars": [
                557,
                {
                    "objects": [
                        554,
                        "[proposal_bars_insert_input!]!"
                    ],
                    "on_conflict": [
                        558
                    ]
                }
            ],
            "insert_proposal_bars_one": [
                547,
                {
                    "object": [
                        554,
                        "proposal_bars_insert_input!"
                    ],
                    "on_conflict": [
                        558
                    ]
                }
            ],
            "insert_proposal_details": [
                595,
                {
                    "objects": [
                        590,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_proposal_details_one": [
                574,
                {
                    "object": [
                        590,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_proposals": [
                669,
                {
                    "objects": [
                        664,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        671
                    ]
                }
            ],
            "insert_proposals_one": [
                642,
                {
                    "object": [
                        664,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        671
                    ]
                }
            ],
            "insert_reactions": [
                719,
                {
                    "objects": [
                        714,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        720
                    ]
                }
            ],
            "insert_reactions_one": [
                702,
                {
                    "object": [
                        714,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        720
                    ]
                }
            ],
            "insert_sessions": [
                757,
                {
                    "objects": [
                        752,
                        "[sessions_insert_input!]!"
                    ],
                    "on_conflict": [
                        758
                    ]
                }
            ],
            "insert_sessions_one": [
                743,
                {
                    "object": [
                        752,
                        "sessions_insert_input!"
                    ],
                    "on_conflict": [
                        758
                    ]
                }
            ],
            "insert_signature_accounts": [
                775,
                {
                    "objects": [
                        772,
                        "[signature_accounts_insert_input!]!"
                    ],
                    "on_conflict": [
                        776
                    ]
                }
            ],
            "insert_signature_accounts_one": [
                767,
                {
                    "object": [
                        772,
                        "signature_accounts_insert_input!"
                    ],
                    "on_conflict": [
                        776
                    ]
                }
            ],
            "insert_signatures": [
                795,
                {
                    "objects": [
                        792,
                        "[signatures_insert_input!]!"
                    ],
                    "on_conflict": [
                        797
                    ]
                }
            ],
            "insert_signatures_one": [
                785,
                {
                    "object": [
                        792,
                        "signatures_insert_input!"
                    ],
                    "on_conflict": [
                        797
                    ]
                }
            ],
            "insert_takes": [
                832,
                {
                    "objects": [
                        827,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        834
                    ]
                }
            ],
            "insert_takes_one": [
                815,
                {
                    "object": [
                        827,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        834
                    ]
                }
            ],
            "insert_token_acct_balances": [
                878,
                {
                    "objects": [
                        873,
                        "[token_acct_balances_insert_input!]!"
                    ],
                    "on_conflict": [
                        879
                    ]
                }
            ],
            "insert_token_acct_balances_one": [
                861,
                {
                    "object": [
                        873,
                        "token_acct_balances_insert_input!"
                    ],
                    "on_conflict": [
                        879
                    ]
                }
            ],
            "insert_token_accts": [
                921,
                {
                    "objects": [
                        916,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        923
                    ]
                }
            ],
            "insert_token_accts_one": [
                904,
                {
                    "object": [
                        916,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        923
                    ]
                }
            ],
            "insert_tokens": [
                956,
                {
                    "objects": [
                        953,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        958
                    ]
                }
            ],
            "insert_tokens_one": [
                946,
                {
                    "object": [
                        953,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        958
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                992,
                {
                    "objects": [
                        987,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        993
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                975,
                {
                    "object": [
                        987,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        993
                    ]
                }
            ],
            "insert_transaction_watchers": [
                1033,
                {
                    "objects": [
                        1028,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        1035
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                1016,
                {
                    "object": [
                        1028,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        1035
                    ]
                }
            ],
            "insert_transactions": [
                1068,
                {
                    "objects": [
                        1065,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1070
                    ]
                }
            ],
            "insert_transactions_one": [
                1058,
                {
                    "object": [
                        1065,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        1070
                    ]
                }
            ],
            "insert_twap_chart_data": [
                1096,
                {
                    "objects": [
                        1093,
                        "[twap_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        1097
                    ]
                }
            ],
            "insert_twap_chart_data_one": [
                1086,
                {
                    "object": [
                        1093,
                        "twap_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        1097
                    ]
                }
            ],
            "insert_twaps": [
                1129,
                {
                    "objects": [
                        1124,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1130
                    ]
                }
            ],
            "insert_twaps_one": [
                1112,
                {
                    "object": [
                        1124,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        1130
                    ]
                }
            ],
            "insert_user_deposits": [
                1170,
                {
                    "objects": [
                        1165,
                        "[user_deposits_insert_input!]!"
                    ]
                }
            ],
            "insert_user_deposits_one": [
                1154,
                {
                    "object": [
                        1165,
                        "user_deposits_insert_input!"
                    ]
                }
            ],
            "insert_user_performance": [
                1208,
                {
                    "objects": [
                        1203,
                        "[user_performance_insert_input!]!"
                    ],
                    "on_conflict": [
                        1209
                    ]
                }
            ],
            "insert_user_performance_one": [
                1191,
                {
                    "object": [
                        1203,
                        "user_performance_insert_input!"
                    ],
                    "on_conflict": [
                        1209
                    ]
                }
            ],
            "insert_users": [
                1240,
                {
                    "objects": [
                        1237,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        1242
                    ]
                }
            ],
            "insert_users_one": [
                1232,
                {
                    "object": [
                        1237,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        1242
                    ]
                }
            ],
            "insert_v0_4_amms": [
                1270,
                {
                    "objects": [
                        1265,
                        "[v0_4_amms_insert_input!]!"
                    ],
                    "on_conflict": [
                        1272
                    ]
                }
            ],
            "insert_v0_4_amms_one": [
                1253,
                {
                    "object": [
                        1265,
                        "v0_4_amms_insert_input!"
                    ],
                    "on_conflict": [
                        1272
                    ]
                }
            ],
            "insert_v0_4_conditional_vaults": [
                1312,
                {
                    "objects": [
                        1307,
                        "[v0_4_conditional_vaults_insert_input!]!"
                    ],
                    "on_conflict": [
                        1314
                    ]
                }
            ],
            "insert_v0_4_conditional_vaults_one": [
                1295,
                {
                    "object": [
                        1307,
                        "v0_4_conditional_vaults_insert_input!"
                    ],
                    "on_conflict": [
                        1314
                    ]
                }
            ],
            "insert_v0_4_merges": [
                1354,
                {
                    "objects": [
                        1349,
                        "[v0_4_merges_insert_input!]!"
                    ],
                    "on_conflict": [
                        1356
                    ]
                }
            ],
            "insert_v0_4_merges_one": [
                1337,
                {
                    "object": [
                        1349,
                        "v0_4_merges_insert_input!"
                    ],
                    "on_conflict": [
                        1356
                    ]
                }
            ],
            "insert_v0_4_metric_decisions": [
                1396,
                {
                    "objects": [
                        1391,
                        "[v0_4_metric_decisions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1397
                    ]
                }
            ],
            "insert_v0_4_metric_decisions_one": [
                1379,
                {
                    "object": [
                        1391,
                        "v0_4_metric_decisions_insert_input!"
                    ],
                    "on_conflict": [
                        1397
                    ]
                }
            ],
            "insert_v0_4_questions": [
                1434,
                {
                    "objects": [
                        1431,
                        "[v0_4_questions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1436
                    ]
                }
            ],
            "insert_v0_4_questions_one": [
                1420,
                {
                    "object": [
                        1431,
                        "v0_4_questions_insert_input!"
                    ],
                    "on_conflict": [
                        1436
                    ]
                }
            ],
            "insert_v0_4_splits": [
                1470,
                {
                    "objects": [
                        1465,
                        "[v0_4_splits_insert_input!]!"
                    ],
                    "on_conflict": [
                        1472
                    ]
                }
            ],
            "insert_v0_4_splits_one": [
                1453,
                {
                    "object": [
                        1465,
                        "v0_4_splits_insert_input!"
                    ],
                    "on_conflict": [
                        1472
                    ]
                }
            ],
            "insert_v0_4_swaps": [
                1505,
                {
                    "objects": [
                        1502,
                        "[v0_4_swaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1506
                    ]
                }
            ],
            "insert_v0_4_swaps_one": [
                1495,
                {
                    "object": [
                        1502,
                        "v0_4_swaps_insert_input!"
                    ],
                    "on_conflict": [
                        1506
                    ]
                }
            ],
            "update_candles": [
                26,
                {
                    "_inc": [
                        20
                    ],
                    "_set": [
                        31
                    ],
                    "where": [
                        18,
                        "candles_bool_exp!"
                    ]
                }
            ],
            "update_candles_by_pk": [
                9,
                {
                    "_inc": [
                        20
                    ],
                    "_set": [
                        31
                    ],
                    "pk_columns": [
                        29,
                        "candles_pk_columns_input!"
                    ]
                }
            ],
            "update_candles_many": [
                26,
                {
                    "updates": [
                        43,
                        "[candles_updates!]!"
                    ]
                }
            ],
            "update_comments": [
                67,
                {
                    "_inc": [
                        61
                    ],
                    "_set": [
                        73
                    ],
                    "where": [
                        59,
                        "comments_bool_exp!"
                    ]
                }
            ],
            "update_comments_by_pk": [
                50,
                {
                    "_inc": [
                        61
                    ],
                    "_set": [
                        73
                    ],
                    "pk_columns": [
                        71,
                        "comments_pk_columns_input!"
                    ]
                }
            ],
            "update_comments_many": [
                67,
                {
                    "updates": [
                        85,
                        "[comments_updates!]!"
                    ]
                }
            ],
            "update_conditional_vaults": [
                106,
                {
                    "_set": [
                        112
                    ],
                    "where": [
                        99,
                        "conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "update_conditional_vaults_by_pk": [
                92,
                {
                    "_set": [
                        112
                    ],
                    "pk_columns": [
                        110,
                        "conditional_vaults_pk_columns_input!"
                    ]
                }
            ],
            "update_conditional_vaults_many": [
                106,
                {
                    "updates": [
                        116,
                        "[conditional_vaults_updates!]!"
                    ]
                }
            ],
            "update_dao_details": [
                132,
                {
                    "_append": [
                        121
                    ],
                    "_delete_at_path": [
                        125
                    ],
                    "_delete_elem": [
                        126
                    ],
                    "_delete_key": [
                        127
                    ],
                    "_inc": [
                        128
                    ],
                    "_prepend": [
                        137
                    ],
                    "_set": [
                        139
                    ],
                    "where": [
                        123,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "update_dao_details_by_pk": [
                118,
                {
                    "_append": [
                        121
                    ],
                    "_delete_at_path": [
                        125
                    ],
                    "_delete_elem": [
                        126
                    ],
                    "_delete_key": [
                        127
                    ],
                    "_inc": [
                        128
                    ],
                    "_prepend": [
                        137
                    ],
                    "_set": [
                        139
                    ],
                    "pk_columns": [
                        136,
                        "dao_details_pk_columns_input!"
                    ]
                }
            ],
            "update_dao_details_many": [
                132,
                {
                    "updates": [
                        147,
                        "[dao_details_updates!]!"
                    ]
                }
            ],
            "update_daos": [
                172,
                {
                    "_inc": [
                        166
                    ],
                    "_set": [
                        178
                    ],
                    "where": [
                        164,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                155,
                {
                    "_inc": [
                        166
                    ],
                    "_set": [
                        178
                    ],
                    "pk_columns": [
                        176,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                172,
                {
                    "updates": [
                        190,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_indexer_account_dependencies": [
                213,
                {
                    "_set": [
                        218
                    ],
                    "where": [
                        206,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_by_pk": [
                199,
                {
                    "_set": [
                        218
                    ],
                    "pk_columns": [
                        216,
                        "indexer_account_dependencies_pk_columns_input!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_many": [
                213,
                {
                    "updates": [
                        222,
                        "[indexer_account_dependencies_updates!]!"
                    ]
                }
            ],
            "update_indexers": [
                233,
                {
                    "_inc": [
                        229
                    ],
                    "_set": [
                        239
                    ],
                    "where": [
                        227,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "update_indexers_by_pk": [
                223,
                {
                    "_inc": [
                        229
                    ],
                    "_set": [
                        239
                    ],
                    "pk_columns": [
                        237,
                        "indexers_pk_columns_input!"
                    ]
                }
            ],
            "update_indexers_many": [
                233,
                {
                    "updates": [
                        247,
                        "[indexers_updates!]!"
                    ]
                }
            ],
            "update_makes": [
                275,
                {
                    "_inc": [
                        269
                    ],
                    "_set": [
                        283
                    ],
                    "where": [
                        267,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                256,
                {
                    "_inc": [
                        269
                    ],
                    "_set": [
                        283
                    ],
                    "pk_columns": [
                        279,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                275,
                {
                    "updates": [
                        295,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                319,
                {
                    "_inc": [
                        313
                    ],
                    "_set": [
                        325
                    ],
                    "where": [
                        311,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                302,
                {
                    "_inc": [
                        313
                    ],
                    "_set": [
                        325
                    ],
                    "pk_columns": [
                        323,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                319,
                {
                    "updates": [
                        337,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                366,
                {
                    "_inc": [
                        360
                    ],
                    "_set": [
                        374
                    ],
                    "where": [
                        358,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                347,
                {
                    "_inc": [
                        360
                    ],
                    "_set": [
                        374
                    ],
                    "pk_columns": [
                        370,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                366,
                {
                    "updates": [
                        386,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_prices": [
                436,
                {
                    "_inc": [
                        430
                    ],
                    "_set": [
                        441
                    ],
                    "where": [
                        402,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "update_prices_by_pk": [
                393,
                {
                    "_inc": [
                        430
                    ],
                    "_set": [
                        441
                    ],
                    "pk_columns": [
                        439,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_chart_data": [
                413,
                {
                    "_inc": [
                        409
                    ],
                    "_set": [
                        417
                    ],
                    "where": [
                        407,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_prices_chart_data_many": [
                413,
                {
                    "updates": [
                        425,
                        "[prices_chart_data_updates!]!"
                    ]
                }
            ],
            "update_prices_many": [
                436,
                {
                    "updates": [
                        453,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                487,
                {
                    "_inc": [
                        481
                    ],
                    "_set": [
                        500
                    ],
                    "where": [
                        479,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                460,
                {
                    "_inc": [
                        481
                    ],
                    "_set": [
                        500
                    ],
                    "pk_columns": [
                        490,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                487,
                {
                    "updates": [
                        512,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                529,
                {
                    "_inc": [
                        525
                    ],
                    "_set": [
                        535
                    ],
                    "where": [
                        523,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                519,
                {
                    "_inc": [
                        525
                    ],
                    "_set": [
                        535
                    ],
                    "pk_columns": [
                        533,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                529,
                {
                    "updates": [
                        543,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_bars": [
                557,
                {
                    "_inc": [
                        553
                    ],
                    "_set": [
                        562
                    ],
                    "where": [
                        551,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "update_proposal_bars_by_pk": [
                547,
                {
                    "_inc": [
                        553
                    ],
                    "_set": [
                        562
                    ],
                    "pk_columns": [
                        560,
                        "proposal_bars_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_bars_many": [
                557,
                {
                    "updates": [
                        570,
                        "[proposal_bars_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                595,
                {
                    "_append": [
                        580
                    ],
                    "_delete_at_path": [
                        586
                    ],
                    "_delete_elem": [
                        587
                    ],
                    "_delete_key": [
                        588
                    ],
                    "_inc": [
                        589
                    ],
                    "_prepend": [
                        599
                    ],
                    "_set": [
                        601
                    ],
                    "where": [
                        584,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                574,
                {
                    "_append": [
                        580
                    ],
                    "_delete_at_path": [
                        586
                    ],
                    "_delete_elem": [
                        587
                    ],
                    "_delete_key": [
                        588
                    ],
                    "_inc": [
                        589
                    ],
                    "_prepend": [
                        599
                    ],
                    "_set": [
                        601
                    ],
                    "pk_columns": [
                        598,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                595,
                {
                    "updates": [
                        613,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                669,
                {
                    "_inc": [
                        663
                    ],
                    "_set": [
                        683
                    ],
                    "where": [
                        661,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                642,
                {
                    "_inc": [
                        663
                    ],
                    "_set": [
                        683
                    ],
                    "pk_columns": [
                        673,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                669,
                {
                    "updates": [
                        695,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                719,
                {
                    "_inc": [
                        713
                    ],
                    "_set": [
                        724
                    ],
                    "where": [
                        711,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                702,
                {
                    "_inc": [
                        713
                    ],
                    "_set": [
                        724
                    ],
                    "pk_columns": [
                        722,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                719,
                {
                    "updates": [
                        736,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_sessions": [
                757,
                {
                    "_set": [
                        762
                    ],
                    "where": [
                        750,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "update_sessions_by_pk": [
                743,
                {
                    "_set": [
                        762
                    ],
                    "pk_columns": [
                        760,
                        "sessions_pk_columns_input!"
                    ]
                }
            ],
            "update_sessions_many": [
                757,
                {
                    "updates": [
                        766,
                        "[sessions_updates!]!"
                    ]
                }
            ],
            "update_signature_accounts": [
                775,
                {
                    "_set": [
                        780
                    ],
                    "where": [
                        770,
                        "signature_accounts_bool_exp!"
                    ]
                }
            ],
            "update_signature_accounts_by_pk": [
                767,
                {
                    "_set": [
                        780
                    ],
                    "pk_columns": [
                        778,
                        "signature_accounts_pk_columns_input!"
                    ]
                }
            ],
            "update_signature_accounts_many": [
                775,
                {
                    "updates": [
                        784,
                        "[signature_accounts_updates!]!"
                    ]
                }
            ],
            "update_signatures": [
                795,
                {
                    "_inc": [
                        791
                    ],
                    "_set": [
                        801
                    ],
                    "where": [
                        789,
                        "signatures_bool_exp!"
                    ]
                }
            ],
            "update_signatures_by_pk": [
                785,
                {
                    "_inc": [
                        791
                    ],
                    "_set": [
                        801
                    ],
                    "pk_columns": [
                        799,
                        "signatures_pk_columns_input!"
                    ]
                }
            ],
            "update_signatures_many": [
                795,
                {
                    "updates": [
                        809,
                        "[signatures_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                832,
                {
                    "_inc": [
                        826
                    ],
                    "_set": [
                        838
                    ],
                    "where": [
                        824,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                815,
                {
                    "_inc": [
                        826
                    ],
                    "_set": [
                        838
                    ],
                    "pk_columns": [
                        836,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                832,
                {
                    "updates": [
                        850,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_acct_balances": [
                878,
                {
                    "_inc": [
                        872
                    ],
                    "_set": [
                        883
                    ],
                    "where": [
                        870,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "update_token_acct_balances_by_pk": [
                861,
                {
                    "_inc": [
                        872
                    ],
                    "_set": [
                        883
                    ],
                    "pk_columns": [
                        881,
                        "token_acct_balances_pk_columns_input!"
                    ]
                }
            ],
            "update_token_acct_balances_many": [
                878,
                {
                    "updates": [
                        895,
                        "[token_acct_balances_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                921,
                {
                    "_inc": [
                        915
                    ],
                    "_set": [
                        927
                    ],
                    "where": [
                        913,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                904,
                {
                    "_inc": [
                        915
                    ],
                    "_set": [
                        927
                    ],
                    "pk_columns": [
                        925,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                921,
                {
                    "updates": [
                        939,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                956,
                {
                    "_inc": [
                        952
                    ],
                    "_set": [
                        962
                    ],
                    "where": [
                        950,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                946,
                {
                    "_inc": [
                        952
                    ],
                    "_set": [
                        962
                    ],
                    "pk_columns": [
                        960,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                956,
                {
                    "updates": [
                        970,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                992,
                {
                    "_inc": [
                        986
                    ],
                    "_set": [
                        997
                    ],
                    "where": [
                        984,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                975,
                {
                    "_inc": [
                        986
                    ],
                    "_set": [
                        997
                    ],
                    "pk_columns": [
                        995,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                992,
                {
                    "updates": [
                        1009,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                1033,
                {
                    "_inc": [
                        1027
                    ],
                    "_set": [
                        1039
                    ],
                    "where": [
                        1025,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                1016,
                {
                    "_inc": [
                        1027
                    ],
                    "_set": [
                        1039
                    ],
                    "pk_columns": [
                        1037,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                1033,
                {
                    "updates": [
                        1051,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                1068,
                {
                    "_inc": [
                        1064
                    ],
                    "_set": [
                        1074
                    ],
                    "where": [
                        1062,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                1058,
                {
                    "_inc": [
                        1064
                    ],
                    "_set": [
                        1074
                    ],
                    "pk_columns": [
                        1072,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                1068,
                {
                    "updates": [
                        1082,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twap_chart_data": [
                1096,
                {
                    "_inc": [
                        1092
                    ],
                    "_set": [
                        1100
                    ],
                    "where": [
                        1090,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_twap_chart_data_many": [
                1096,
                {
                    "updates": [
                        1108,
                        "[twap_chart_data_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                1129,
                {
                    "_inc": [
                        1123
                    ],
                    "_set": [
                        1134
                    ],
                    "where": [
                        1121,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                1112,
                {
                    "_inc": [
                        1123
                    ],
                    "_set": [
                        1134
                    ],
                    "pk_columns": [
                        1132,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                1129,
                {
                    "updates": [
                        1146,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_user_deposits": [
                1170,
                {
                    "_inc": [
                        1164
                    ],
                    "_set": [
                        1173
                    ],
                    "where": [
                        1163,
                        "user_deposits_bool_exp!"
                    ]
                }
            ],
            "update_user_deposits_many": [
                1170,
                {
                    "updates": [
                        1184,
                        "[user_deposits_updates!]!"
                    ]
                }
            ],
            "update_user_performance": [
                1208,
                {
                    "_inc": [
                        1202
                    ],
                    "_set": [
                        1213
                    ],
                    "where": [
                        1200,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "update_user_performance_by_pk": [
                1191,
                {
                    "_inc": [
                        1202
                    ],
                    "_set": [
                        1213
                    ],
                    "pk_columns": [
                        1211,
                        "user_performance_pk_columns_input!"
                    ]
                }
            ],
            "update_user_performance_many": [
                1208,
                {
                    "updates": [
                        1225,
                        "[user_performance_updates!]!"
                    ]
                }
            ],
            "update_users": [
                1240,
                {
                    "_set": [
                        1246
                    ],
                    "where": [
                        1235,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                1232,
                {
                    "_set": [
                        1246
                    ],
                    "pk_columns": [
                        1244,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                1240,
                {
                    "updates": [
                        1250,
                        "[users_updates!]!"
                    ]
                }
            ],
            "update_v0_4_amms": [
                1270,
                {
                    "_inc": [
                        1264
                    ],
                    "_set": [
                        1276
                    ],
                    "where": [
                        1262,
                        "v0_4_amms_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_amms_by_pk": [
                1253,
                {
                    "_inc": [
                        1264
                    ],
                    "_set": [
                        1276
                    ],
                    "pk_columns": [
                        1274,
                        "v0_4_amms_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_amms_many": [
                1270,
                {
                    "updates": [
                        1288,
                        "[v0_4_amms_updates!]!"
                    ]
                }
            ],
            "update_v0_4_conditional_vaults": [
                1312,
                {
                    "_inc": [
                        1306
                    ],
                    "_set": [
                        1318
                    ],
                    "where": [
                        1304,
                        "v0_4_conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_conditional_vaults_by_pk": [
                1295,
                {
                    "_inc": [
                        1306
                    ],
                    "_set": [
                        1318
                    ],
                    "pk_columns": [
                        1316,
                        "v0_4_conditional_vaults_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_conditional_vaults_many": [
                1312,
                {
                    "updates": [
                        1330,
                        "[v0_4_conditional_vaults_updates!]!"
                    ]
                }
            ],
            "update_v0_4_merges": [
                1354,
                {
                    "_inc": [
                        1348
                    ],
                    "_set": [
                        1360
                    ],
                    "where": [
                        1346,
                        "v0_4_merges_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_merges_by_pk": [
                1337,
                {
                    "_inc": [
                        1348
                    ],
                    "_set": [
                        1360
                    ],
                    "pk_columns": [
                        1358,
                        "v0_4_merges_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_merges_many": [
                1354,
                {
                    "updates": [
                        1372,
                        "[v0_4_merges_updates!]!"
                    ]
                }
            ],
            "update_v0_4_metric_decisions": [
                1396,
                {
                    "_inc": [
                        1390
                    ],
                    "_set": [
                        1401
                    ],
                    "where": [
                        1388,
                        "v0_4_metric_decisions_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_metric_decisions_by_pk": [
                1379,
                {
                    "_inc": [
                        1390
                    ],
                    "_set": [
                        1401
                    ],
                    "pk_columns": [
                        1399,
                        "v0_4_metric_decisions_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_metric_decisions_many": [
                1396,
                {
                    "updates": [
                        1413,
                        "[v0_4_metric_decisions_updates!]!"
                    ]
                }
            ],
            "update_v0_4_questions": [
                1434,
                {
                    "_append": [
                        1423
                    ],
                    "_delete_at_path": [
                        1427
                    ],
                    "_delete_elem": [
                        1428
                    ],
                    "_delete_key": [
                        1429
                    ],
                    "_inc": [
                        1430
                    ],
                    "_prepend": [
                        1439
                    ],
                    "_set": [
                        1441
                    ],
                    "where": [
                        1425,
                        "v0_4_questions_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_questions_by_pk": [
                1420,
                {
                    "_append": [
                        1423
                    ],
                    "_delete_at_path": [
                        1427
                    ],
                    "_delete_elem": [
                        1428
                    ],
                    "_delete_key": [
                        1429
                    ],
                    "_inc": [
                        1430
                    ],
                    "_prepend": [
                        1439
                    ],
                    "_set": [
                        1441
                    ],
                    "pk_columns": [
                        1438,
                        "v0_4_questions_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_questions_many": [
                1434,
                {
                    "updates": [
                        1449,
                        "[v0_4_questions_updates!]!"
                    ]
                }
            ],
            "update_v0_4_splits": [
                1470,
                {
                    "_inc": [
                        1464
                    ],
                    "_set": [
                        1476
                    ],
                    "where": [
                        1462,
                        "v0_4_splits_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_splits_by_pk": [
                1453,
                {
                    "_inc": [
                        1464
                    ],
                    "_set": [
                        1476
                    ],
                    "pk_columns": [
                        1474,
                        "v0_4_splits_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_splits_many": [
                1470,
                {
                    "updates": [
                        1488,
                        "[v0_4_splits_updates!]!"
                    ]
                }
            ],
            "update_v0_4_swaps": [
                1505,
                {
                    "_inc": [
                        1501
                    ],
                    "_set": [
                        1510
                    ],
                    "where": [
                        1499,
                        "v0_4_swaps_bool_exp!"
                    ]
                }
            ],
            "update_v0_4_swaps_by_pk": [
                1495,
                {
                    "_inc": [
                        1501
                    ],
                    "_set": [
                        1510
                    ],
                    "pk_columns": [
                        1508,
                        "v0_4_swaps_pk_columns_input!"
                    ]
                }
            ],
            "update_v0_4_swaps_many": [
                1505,
                {
                    "updates": [
                        1518,
                        "[v0_4_swaps_updates!]!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        859,
                        "timestamptz!"
                    ]
                }
            ],
            "candles_stream": [
                9,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        38,
                        "[candles_stream_cursor_input]!"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "comments_stream": [
                50,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        80,
                        "[comments_stream_cursor_input]!"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "conditional_vaults_stream": [
                92,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        113,
                        "[conditional_vaults_stream_cursor_input]!"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "dao_details": [
                118,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "dao_details_stream": [
                118,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        143,
                        "[dao_details_stream_cursor_input]!"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                155,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        185,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                199,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies_stream": [
                199,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        219,
                        "[indexer_account_dependencies_stream_cursor_input]!"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexers": [
                223,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_aggregate": [
                224,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers_stream": [
                223,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        243,
                        "[indexers_stream_cursor_input]!"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                256,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        290,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                302,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        332,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                347,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        381,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_by_pk": [
                393,
                {
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                403,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                404,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_stream": [
                403,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        421,
                        "[prices_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_stream": [
                393,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        448,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "program_system": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                460,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        507,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programs": [
                519,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_aggregate": [
                520,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                519,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        539,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "proposal_bars": [
                547,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                548,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        859,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars_stream": [
                547,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        566,
                        "[proposal_bars_stream_cursor_input]!"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_details": [
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                574,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        608,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                624,
                {
                    "distinct_on": [
                        632,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        631,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        628
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                625,
                {
                    "distinct_on": [
                        632,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        631,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        628
                    ]
                }
            ],
            "proposal_total_trade_volume_stream": [
                624,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        636,
                        "[proposal_total_trade_volume_stream_cursor_input]!"
                    ],
                    "where": [
                        628
                    ]
                }
            ],
            "proposals": [
                642,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_aggregate": [
                643,
                {
                    "distinct_on": [
                        674,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        672,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "proposals_by_pk": [
                642,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                642,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        690,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        661
                    ]
                }
            ],
            "reactions": [
                702,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_aggregate": [
                703,
                {
                    "distinct_on": [
                        723,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        721,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "reactions_by_pk": [
                702,
                {
                    "reaction_id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "reactions_stream": [
                702,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        731,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "sessions": [
                743,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "sessions_aggregate": [
                744,
                {
                    "distinct_on": [
                        761,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        759,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "sessions_by_pk": [
                743,
                {
                    "id": [
                        1251,
                        "uuid!"
                    ]
                }
            ],
            "sessions_stream": [
                743,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        763,
                        "[sessions_stream_cursor_input]!"
                    ],
                    "where": [
                        750
                    ]
                }
            ],
            "signature_accounts": [
                767,
                {
                    "distinct_on": [
                        779,
                        "[signature_accounts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        777,
                        "[signature_accounts_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "signature_accounts_aggregate": [
                768,
                {
                    "distinct_on": [
                        779,
                        "[signature_accounts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        777,
                        "[signature_accounts_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "signature_accounts_by_pk": [
                767,
                {
                    "account": [
                        5,
                        "String!"
                    ],
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "signature_accounts_stream": [
                767,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        781,
                        "[signature_accounts_stream_cursor_input]!"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "signatures": [
                785,
                {
                    "distinct_on": [
                        800,
                        "[signatures_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        798,
                        "[signatures_order_by!]"
                    ],
                    "where": [
                        789
                    ]
                }
            ],
            "signatures_aggregate": [
                786,
                {
                    "distinct_on": [
                        800,
                        "[signatures_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        798,
                        "[signatures_order_by!]"
                    ],
                    "where": [
                        789
                    ]
                }
            ],
            "signatures_by_pk": [
                785,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "signatures_stream": [
                785,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        805,
                        "[signatures_stream_cursor_input]!"
                    ],
                    "where": [
                        789
                    ]
                }
            ],
            "takes": [
                815,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_aggregate": [
                816,
                {
                    "distinct_on": [
                        837,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        835,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "takes_by_pk": [
                815,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                815,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        845,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        824
                    ]
                }
            ],
            "token_acct_balances": [
                861,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                862,
                {
                    "distinct_on": [
                        882,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        880,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                861,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        859,
                        "timestamptz!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances_stream": [
                861,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        890,
                        "[token_acct_balances_stream_cursor_input]!"
                    ],
                    "where": [
                        870
                    ]
                }
            ],
            "token_accts": [
                904,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "token_accts_aggregate": [
                905,
                {
                    "distinct_on": [
                        926,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        924,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "token_accts_by_pk": [
                904,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                904,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        934,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        913
                    ]
                }
            ],
            "tokens": [
                946,
                {
                    "distinct_on": [
                        961,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        959,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        950
                    ]
                }
            ],
            "tokens_aggregate": [
                947,
                {
                    "distinct_on": [
                        961,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        959,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        950
                    ]
                }
            ],
            "tokens_by_pk": [
                946,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                946,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        966,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        950
                    ]
                }
            ],
            "top_dao_traders": [
                151,
                {
                    "args": [
                        974,
                        "top_dao_traders_arguments!"
                    ],
                    "distinct_on": [
                        153,
                        "[dao_trader_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        154,
                        "[dao_trader_order_by!]"
                    ],
                    "where": [
                        152
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                975,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                976,
                {
                    "distinct_on": [
                        996,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        994,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                975,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions_stream": [
                975,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1004,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transaction_watchers": [
                1016,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                1017,
                {
                    "distinct_on": [
                        1038,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1036,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                1016,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                1016,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1046,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        1025
                    ]
                }
            ],
            "transactions": [
                1058,
                {
                    "distinct_on": [
                        1073,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1071,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1062
                    ]
                }
            ],
            "transactions_aggregate": [
                1059,
                {
                    "distinct_on": [
                        1073,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1071,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1062
                    ]
                }
            ],
            "transactions_by_pk": [
                1058,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                1058,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1078,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        1062
                    ]
                }
            ],
            "twap_chart_data": [
                1086,
                {
                    "distinct_on": [
                        1099,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1098,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1090
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1087,
                {
                    "distinct_on": [
                        1099,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1098,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1090
                    ]
                }
            ],
            "twap_chart_data_stream": [
                1086,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1104,
                        "[twap_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        1090
                    ]
                }
            ],
            "twaps": [
                1112,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_aggregate": [
                1113,
                {
                    "distinct_on": [
                        1133,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1131,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "twaps_by_pk": [
                1112,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "twaps_stream": [
                1112,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1141,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1121
                    ]
                }
            ],
            "user_count_and_trade_count_per_proposal": [
                620,
                {
                    "args": [
                        1153,
                        "user_count_and_trade_count_per_proposal_arguments!"
                    ],
                    "distinct_on": [
                        622,
                        "[proposal_statistics_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_statistics_order_by!]"
                    ],
                    "where": [
                        621
                    ]
                }
            ],
            "user_deposits": [
                1154,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1155,
                {
                    "distinct_on": [
                        1172,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1171,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_deposits_stream": [
                1154,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1180,
                        "[user_deposits_stream_cursor_input]!"
                    ],
                    "where": [
                        1163
                    ]
                }
            ],
            "user_performance": [
                1191,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performance_aggregate": [
                1192,
                {
                    "distinct_on": [
                        1212,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1210,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "user_performance_by_pk": [
                1191,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "user_performance_stream": [
                1191,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1220,
                        "[user_performance_stream_cursor_input]!"
                    ],
                    "where": [
                        1200
                    ]
                }
            ],
            "users": [
                1232,
                {
                    "distinct_on": [
                        1245,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1243,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1235
                    ]
                }
            ],
            "users_aggregate": [
                1233,
                {
                    "distinct_on": [
                        1245,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1243,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1235
                    ]
                }
            ],
            "users_by_pk": [
                1232,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users_stream": [
                1232,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1247,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        1235
                    ]
                }
            ],
            "v0_4_amms": [
                1253,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms_aggregate": [
                1254,
                {
                    "distinct_on": [
                        1275,
                        "[v0_4_amms_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1273,
                        "[v0_4_amms_order_by!]"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_amms_by_pk": [
                1253,
                {
                    "amm_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_amms_stream": [
                1253,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1283,
                        "[v0_4_amms_stream_cursor_input]!"
                    ],
                    "where": [
                        1262
                    ]
                }
            ],
            "v0_4_conditional_vaults": [
                1295,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_aggregate": [
                1296,
                {
                    "distinct_on": [
                        1317,
                        "[v0_4_conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1315,
                        "[v0_4_conditional_vaults_order_by!]"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_conditional_vaults_by_pk": [
                1295,
                {
                    "conditional_vault_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_conditional_vaults_stream": [
                1295,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1325,
                        "[v0_4_conditional_vaults_stream_cursor_input]!"
                    ],
                    "where": [
                        1304
                    ]
                }
            ],
            "v0_4_merges": [
                1337,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_aggregate": [
                1338,
                {
                    "distinct_on": [
                        1359,
                        "[v0_4_merges_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1357,
                        "[v0_4_merges_order_by!]"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_merges_by_pk": [
                1337,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_merges_stream": [
                1337,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1367,
                        "[v0_4_merges_stream_cursor_input]!"
                    ],
                    "where": [
                        1346
                    ]
                }
            ],
            "v0_4_metric_decisions": [
                1379,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_metric_decisions_aggregate": [
                1380,
                {
                    "distinct_on": [
                        1400,
                        "[v0_4_metric_decisions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1398,
                        "[v0_4_metric_decisions_order_by!]"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_metric_decisions_by_pk": [
                1379,
                {
                    "id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_metric_decisions_stream": [
                1379,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1408,
                        "[v0_4_metric_decisions_stream_cursor_input]!"
                    ],
                    "where": [
                        1388
                    ]
                }
            ],
            "v0_4_questions": [
                1420,
                {
                    "distinct_on": [
                        1440,
                        "[v0_4_questions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1437,
                        "[v0_4_questions_order_by!]"
                    ],
                    "where": [
                        1425
                    ]
                }
            ],
            "v0_4_questions_aggregate": [
                1421,
                {
                    "distinct_on": [
                        1440,
                        "[v0_4_questions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1437,
                        "[v0_4_questions_order_by!]"
                    ],
                    "where": [
                        1425
                    ]
                }
            ],
            "v0_4_questions_by_pk": [
                1420,
                {
                    "question_addr": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_questions_stream": [
                1420,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1445,
                        "[v0_4_questions_stream_cursor_input]!"
                    ],
                    "where": [
                        1425
                    ]
                }
            ],
            "v0_4_splits": [
                1453,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_aggregate": [
                1454,
                {
                    "distinct_on": [
                        1475,
                        "[v0_4_splits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1473,
                        "[v0_4_splits_order_by!]"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_splits_by_pk": [
                1453,
                {
                    "vault_addr": [
                        5,
                        "String!"
                    ],
                    "vault_seq_num": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "v0_4_splits_stream": [
                1453,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1483,
                        "[v0_4_splits_stream_cursor_input]!"
                    ],
                    "where": [
                        1462
                    ]
                }
            ],
            "v0_4_swaps": [
                1495,
                {
                    "distinct_on": [
                        1509,
                        "[v0_4_swaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1507,
                        "[v0_4_swaps_order_by!]"
                    ],
                    "where": [
                        1499
                    ]
                }
            ],
            "v0_4_swaps_aggregate": [
                1496,
                {
                    "distinct_on": [
                        1509,
                        "[v0_4_swaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1507,
                        "[v0_4_swaps_order_by!]"
                    ],
                    "where": [
                        1499
                    ]
                }
            ],
            "v0_4_swaps_by_pk": [
                1495,
                {
                    "signature": [
                        5,
                        "String!"
                    ]
                }
            ],
            "v0_4_swaps_stream": [
                1495,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1514,
                        "[v0_4_swaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1499
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}