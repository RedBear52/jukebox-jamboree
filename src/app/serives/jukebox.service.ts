import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class JukeboxService {
  private readonly storageBucketUrl =
    'https://storage.googleapis.com/storage/v1/b/cousin-mike-jamboree'

  constructor(private http: HttpClient) {}
}
