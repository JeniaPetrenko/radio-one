import { Episode } from "@/global"; // Тут передбачається, що тип Episode є визначеним у вашому проекті.
import { useState, useEffect } from "react";

interface FilterProps {
  episodes: Episode[];
  setFilteredEpisodes: (episodes: Episode[]) => void;
  filter: string;
}

export default function FilterEpisodes({
  episodes,
  setFilteredEpisodes,
  filter,
}: FilterProps) {
  const [localFilter, setLocalFilter] = useState<string>(filter);

  useEffect(() => {
    // Перевірка, чи є рядок в форматі дати
    const isDateFilter = (value: string): boolean => {
      return (
        /^\d{4}-\d{2}-\d{2}$/.test(value) || // Формат "YYYY-MM-DD"
        /^\d{4}-\d{2}$/.test(value) || // Формат "YYYY-MM"
        /^\d{4}$/.test(value) // Формат "YYYY"
      );
    };

    // Фільтрація епізодів
    const filteredEpisodes = episodes.filter((episode) => {
      if (isDateFilter(localFilter)) {
        const inputDate = new Date(localFilter);
        const episodeDate = new Date(
          parseInt(
            episode.publishdateutc.replace("/Date(", "").replace(")/", "")
          )
        ); // перетворення формату дати

        if (localFilter.length === 4) {
          // Формат "YYYY"
          inputDate.setMonth(0, 1); // Початок року
          const endDate = new Date(inputDate.getFullYear() + 1, 0, 1); // Кінець року
          return episodeDate >= inputDate && episodeDate < endDate;
        } else if (localFilter.length === 7) {
          // Формат "YYYY-MM"
          inputDate.setDate(1); // Початок місяця
          const endDate = new Date(
            inputDate.getFullYear(),
            inputDate.getMonth() + 1,
            1
          ); // Кінець місяця
          return episodeDate >= inputDate && episodeDate < endDate;
        } else if (localFilter.length === 10) {
          // Формат "YYYY-MM-DD"
          const endDate = new Date(inputDate);
          endDate.setDate(endDate.getDate() + 1); // Наступний день
          return episodeDate >= inputDate && episodeDate < endDate;
        }
      } else {
        // Фільтрація за назвою епізоду
        return episode.title.toLowerCase().includes(localFilter.toLowerCase());
      }
    });

    // Сортування результатів
    const sortedEpisodes = [...filteredEpisodes].sort((a, b) => {
      if (isDateFilter(localFilter)) {
        // Сортуємо за датою публікації
        return (
          new Date(a.publishdateutc).getTime() -
          new Date(b.publishdateutc).getTime()
        );
      } else {
        // Сортуємо за назвою
        return a.title.localeCompare(b.title);
      }
    });

    // Оновлюємо відфільтровані епізоди
    setFilteredEpisodes(sortedEpisodes);
  }, [localFilter, episodes, setFilteredEpisodes]);

  return (
    <input
      type="text"
      value={localFilter}
      onChange={(e) => setLocalFilter(e.target.value)} // Оновлюємо локальний фільтр
      placeholder="Enter a keyword or date"
    />
  );
}
