import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { provideNzIconsPatch } from 'ng-zorro-antd/icon';
import {
  MessageOutline,
  YoutubeOutline,
  TagOutline,
  ShoppingCartOutline,
  BellOutline,
  UserOutline,
  SearchOutline,
  MoreOutline,
  LikeOutline,
  EyeOutline,
  ShareAltOutline,
} from '@ant-design/icons-angular/icons';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-journal',
  imports: [
    NzButtonModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzTagModule,
    NzSelectModule,
    NzDropDownModule,
    FormsModule,
    RouterLink,
    NzSpaceModule
  ],
  providers: [
    provideNzIconsPatch([
      MessageOutline,
      YoutubeOutline,
      TagOutline,
      ShoppingCartOutline,
      BellOutline,
      UserOutline,
      SearchOutline,
      MoreOutline,
      LikeOutline,
      EyeOutline,
      ShareAltOutline,
    ]),
  ],
  templateUrl: './journal.html',
  styleUrl: './journal.scss',
})
export class Journal {
  readonly sports: { value: number; label: string }[] = [
    { value: 0, label: 'Американский футбол' },
    { value: 1, label: 'Бадминтон' },
    { value: 2, label: 'Баскетбол' },
    { value: 3, label: 'Бейсбол' },
    { value: 4, label: 'Биатлон' },
    { value: 5, label: 'Бокс' },
    { value: 6, label: 'Борьба вольная' },
    { value: 7, label: 'Борьба греко-римская' },
    { value: 8, label: 'Велоспорт' },
    { value: 9, label: 'Водное поло' },
    { value: 10, label: 'Волейбол' },
    { value: 11, label: 'Гандбол' },
    { value: 12, label: 'Гимнастика спортивная' },
    { value: 13, label: 'Гимнастика художественная' },
    { value: 14, label: 'Гольф' },
    { value: 15, label: 'Гребля' },
    { value: 16, label: 'Дзюдо' },
    { value: 17, label: 'Карате' },
    { value: 18, label: 'Конный спорт' },
    { value: 19, label: 'Конькобежный спорт' },
    { value: 20, label: 'Лёгкая атлетика' },
    { value: 21, label: 'Лыжные гонки' },
    { value: 22, label: 'Настольный теннис' },
    { value: 23, label: 'Парусный спорт' },
    { value: 24, label: 'Плавание' },
    { value: 25, label: 'Пляжный волейбол' },
    { value: 26, label: 'Прыжки в воду' },
    { value: 27, label: 'Прыжки на лыжах с трамплина' },
    { value: 28, label: 'Регби' },
    { value: 29, label: 'Санный спорт' },
    { value: 30, label: 'Синхронное плавание' },
    { value: 31, label: 'Скалолазание' },
    { value: 32, label: 'Сквош' },
    { value: 33, label: 'Сноуборд' },
    { value: 34, label: 'Современное пятиборье' },
    { value: 35, label: 'Софтбол' },
    { value: 36, label: 'Стрельба из лука' },
    { value: 37, label: 'Стрельба пулевая' },
    { value: 38, label: 'Сурф-марафон' },
    { value: 39, label: 'Теннис' },
    { value: 40, label: 'Триатлон' },
    { value: 41, label: 'Тхэквондо' },
    { value: 42, label: 'Тяжёлая атлетика' },
    { value: 43, label: 'Ушу' },
    { value: 44, label: 'Фехтование' },
    { value: 45, label: 'Фигурное катание' },
    { value: 46, label: 'Футбол' },
    { value: 47, label: 'Хоккей на траве' },
    { value: 48, label: 'Хоккей с мячом' },
    { value: 49, label: 'Хоккей с шайбой' },
    { value: 50, label: 'Чирлидинг' },
    { value: 51, label: 'Шахматы' },
    { value: 52, label: 'Шорт-трек' },
    { value: 53, label: 'Фитнес' },
    { value: 54, label: 'Кёрлинг' },
    { value: 55, label: 'Сёрфинг' },
  ];

  readonly tags: { value: number; label: string }[] = Array.from(
    { length: 23 },
    (_, i) => ({
      value: i,
      label: `Тэг${i}`,
    })
  );

  protected readonly titleText = 'Заголовок для Алексея'.repeat(10);
  protected readonly descriptionText =
    'Мы, команда НХЛ-центр, — профессионалы с большим тренерским опытом. Уже много лет мы делаем хоккей доступным для всех желающих, с 2013 года доступны и делаем хоккей досту хоккей досту хоккей для ';

  protected currentImageIndex = 0;
  protected readonly images = ['/gallery1.png', '/gallery2.png'];

  nextImage(): void {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
