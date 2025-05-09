# Schema Docs

- [1. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > fruits`](#fruits)
  - [1.1. root > fruits > fruits items](#fruits_items)
- [2. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > vegetables`](#vegetables)
  - [2.1. root > vegetables > vegetables items](#vegetables_items)
  - [2.2. At least one of the items must be](#autogenerated_heading_2)

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |

**Description:** A little food fun

| Property                     | Pattern | Type            | Deprecated | Definition | Title/Description           |
| ---------------------------- | ------- | --------------- | ---------- | ---------- | --------------------------- |
| - [fruits](#fruits )         | No      | array of string | No         | -          | 5 to 8 fruits that you like |
| - [vegetables](#vegetables ) | No      | array           | No         | -          | -                           |

## <a name="fruits"></a>1. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > fruits`

|          |                   |
| -------- | ----------------- |
| **Type** | `array of string` |

**Description:** 5 to 8 fruits that you like

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | 5                  |
| **Max items**        | 8                  |
| **Items unicity**    | True               |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be | Description |
| ------------------------------- | ----------- |
| [fruits items](#fruits_items)   | -           |

### <a name="fruits_items"></a>1.1. root > fruits > fruits items

|          |          |
| -------- | -------- |
| **Type** | `string` |

## <a name="vegetables"></a>2. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > vegetables`

|          |         |
| -------- | ------- |
| **Type** | `array` |

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be       | Description |
| ------------------------------------- | ----------- |
| [vegetables items](#vegetables_items) | -           |

### <a name="vegetables_items"></a>2.1. root > vegetables > vegetables items

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |

### <a name="autogenerated_heading_2"></a>2.2. At least one of the items must be

|          |         |
| -------- | ------- |
| **Type** | `const` |

Specific value: `"eggplant"`

----------------------------------------------------------------------------------------------------------------------------
Generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans)
